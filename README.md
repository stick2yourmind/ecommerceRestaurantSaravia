# Ccia Bar:
Ccia Bar es el proyecto final del curso de React en Coder House.
Tal como su nombre lo indica esta destinado a un bar.

# Configuracion/instalacion:
Pasos a seguir para poder utilizar correctamente la aplicación:
```
git clone https://github.com/stick2yourmind/ecommerceRestoBarSaravia.git
cd ecommerceRestoBarSaravia
npm install
npm start
```

# Uso y caracteristicas:

[[Video presentación]](https://youtu.be/Hjnm-iVyHZY)


Al navegar por la página principal el usuario podra visualizar la lista completa de productos:
<img src="https://github.com/stick2yourmind/ecommerceRestoBarSaravia/blob/main/capturas/foto_menu_principal.JPG?raw=true" alt="Captura menu principal"/>
En caso que ingrese a una sección inexistente sera redirigido a la página principal.
En caso que el usuario desee un tipo de producto especifico lo puede hacer clickleando en el 
navbar la categoria correspondiente.
Luego de esto el usuario es redirigido a la sección mencionada, ejemplo caso cervezas:
<img src="https://github.com/stick2yourmind/ecommerceRestoBarSaravia/blob/main/capturas/foto_menu_cerveza_click.JPG?raw=true" alt="Captura menu cerveza"/>

Cada categoria tendra una ruta de /productos/:categoryId. Son obtenidos mediante el uso del hook useParams.
Cada categoria obtiene los productos a traves de una query a un servidor de firebase, mediante
la funcion getCategoryMenu(CATEGORIA_SOLICITADA). La página principal lo hace mediante el 
llamado a la funcion getAllMenu().

Cada parametro de la ruta entonces sera utilizado para determinar la funcion y parametro correctos para realizar
la querty a la base de datos de Firebase.
En caso de la página principal este carece de params, por lo tanto, se usa el caso undefined
para diferenciarlo.

```
import { getAllMenu, getCategoryMenu } from '../../services/firebase/query'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()
  let endpointCategories = {
    undefined : getAllMenu(),
    'beers': getCategoryMenu('beers'),
    'burgers': getCategoryMenu('burgers'),
    'fries-nachos': getCategoryMenu('friesNachos'),
    'pizzas': getCategoryMenu('pizzas')
  }

  useEffect(()=>{
    // En caso que el location exista en endpointCategories, se le carga el endpoint correspondiente
    // de otra manera se carga por defecto
    let endpoint = endpointCategories?.[categoryId] || endpointCategories.undefined
    getPromiseList(endpoint)
      .then(dataFetched => {
        setProducts(dataFetched)
      })
  }, [categoryId])
```


Una vez el usuario decida comprar un producto este sera redirigido a la ruta:
/detalle/:itemId
<img src="https://github.com/stick2yourmind/ecommerceRestoBarSaravia/blob/main/capturas/foto_compra_producto_1.JPG?raw=true" alt="Captura detalle de un producto"/>
- El usuario no podra comprar una cantidad menor a 0 o mayor a 10.
- En caso que el usuario decida ingresar un valor fuera del rango permitido
   este sera modificado al valor valido mas proximo. En caso que ingrese un 
   numero decimal sera truncado.
   
```
    const validateInput = ({ target }) => {
        if(target.value > MIN_QUANTITY_DEF && target.value <= MAX_QUANTITY_DEF)
            return setQuantity(Math.trunc(+target.value))
        target.value > MAX_QUANTITY_DEF
            ? target.value = MAX_QUANTITY_DEF
            : target.value = MIN_QUANTITY_DEF
        setQuantity(+target.value)
    }
```

Ejemplo caso valido:
<img src="https://github.com/stick2yourmind/ecommerceRestoBarSaravia/blob/main/capturas/foto_compra_producto_2.JPG?raw=true" alt="Captura ejemplo valido"/>

Se obtiene la información del producto mediante la query getItemById(ID_DEL_PRODUCTO).
El metodo retorna la información del producto solicitado si existe en la base de datos,
de otra manera devuelve un objeto con la propiedad id = undefined.

En el componente ItemDetailContainer:
```
    const { itemId } = useParams()
    const [ItemDetailed, setItemDetailed ] = useState({})

     useEffect( () => {
        getItemById(itemId)
            .then(dataFetched => {
        setItemDetailed(dataFetched)
      })
     } , [itemId])
```

En /src/services/firebase/query.js
```
export const getItemById = async (idToFetch) =>{
    const itemFetched = doc(db, 'productos', idToFetch)
    const snapshotData = await getDoc(itemFetched)
    let itemFetchedMenu = {
        id: snapshotData.id,
        ...snapshotData.data()
    }
    // snapshotData.data() returns undefined when no data is matched
    if (snapshotData.data() === undefined)
        itemFetchedMenu = {id: undefined}
    return itemFetchedMenu
}
```
Luego de ingresar una cantidad valida y clickear comprar, se renderizada un boton
de finalizar compra, si es que no desea comprar mas productos. Se añade usando context la 
cantidad y el producto al carrito de compras. El navbar es renderizado en consecuencia, de tal
manera que es visible el carrito y la cantidad de items a comprar.
<img src="https://github.com/stick2yourmind/ecommerceRestoBarSaravia/blob/main/capturas/foto_compra_producto_con_cart.JPG?raw=true" alt="Captura compra producto"/>

En el componente CartWidget:
```
  const { totalQuantityCart } = useContext( CartContext )

  const renderCardWidget = () => {
    return(
      <div className='cartContainer'>
        <Link to="/cart">
          <img 
            alt='carrito de compras' 
            className='cartImg' 
            src={cartIcon} 
          />
          <p className='cartQuantity'>{ `${totalQuantityCart()}` }</p>
       </Link>
      </div>
```

Hooks utilizados en el componente ItemCount:
```
    const { addItemCart, isInCart, getItemQuantity, updateItemQuantity } = useContext(CartContext)
    const [quantity, setQuantity] = useState(()=> getItemQuantity(item.id))
```

Boton "Comprar" (Componente ItemCount):
```
<button 
    className="buyButton"
    onClick={ () => onAdd(item.id) } 
    disabled={!quantity}
>
    Comprar
</button>
```
Hook del boton "Comprar" (Componente ItemCount):
```
    const onAdd = ( itemID ) => {
        !isInCart( itemID )
            ? addItemCart( item, quantity )
            : updateItemQuantity( item.id, quantity )
    }
```
En caso que el :id_del_producto no sea encontrado en el servidor de firebase se mostrara el siguiente mensaje:
<img src="https://github.com/stick2yourmind/ecommerceRestoBarSaravia/blob/main/capturas/foto_compra_producto_no_encontrado.JPG?raw=true" alt="Captura producto no encontrado"/>


Al hacer click sobre el icono del carrito, ubicado arriba a la derecha, el usuario sera redirigido a la
direccion /cart donde debera confirmar la compra:
<img src="https://github.com/stick2yourmind/ecommerceRestoBarSaravia/blob/main/capturas/foto_carrito_1.JPG?raw=true" alt="Captura direccion /cart"/>

La lista de compra del carrito se obtiene usando context.

En /src/Pages/Cart/Cart.js:
```
    const { cart, totalPriceCart, totalQuantityCart } = useContext(CartContext)
    const { setCheckoutState } = useContext(CartContext)
```

En /src/Context/CartContext/CartContext.js:
setCheckoutState sera utilizado para determinar cuando el usuario clickeo "Confirmar compra"
```
    const setCheckoutState = (  ) => {
        setCheckout(true)
        return checkout
    }
```

Par eliminar un producto del carrito, se debe dar click en el icono del recipiente de basura.
Esta acción desencadena el evento onClick y se elimina el item del carrito mediante el
método deleteItemFromCart.

En el componente CartItem:
```
        const { deleteItemFromCart } = useContext(CartContext)
    return(
    <div key={item.id} className="itemCart">
        <img className='imgItemCart'
            alt={item.description}
            src={ '/' + item.img} 
        />
        <div className='bodyItem'>
            <h4 className='titleItem'>
                {item.title}
            </h4>
            <h5  className='priceItem'>
                $ {item.price}
            </h5>
            <h5  className='quantityItem'>
                Cantidad: { quantity }
            </h5>
            <h5  className='priceItem'>
                Subtotal: $ {item.price  * quantity}
            </h5>
        </div>
        <div className="updateDeleteItemCart">
            <button 
                className="deleteItemCart" 
                onClick={()=>deleteItemFromCart(item.id)}
            > 
```

Ejemplo de haber eliminado las 2 pizzas de muzzarella y reemplazada por 3 pizzas de jamon y morrones:
<img src="https://github.com/stick2yourmind/ecommerceRestoBarSaravia/blob/main/capturas/foto_carrito_3.JPG?raw=true" alt="Captura carrito modificado"/>

En caso que el usuario desee ingresar a la direccion /cart sin productos seleccionados para comprar se 
mostrara el siguiente mensaje:
<img src="https://github.com/stick2yourmind/ecommerceRestoBarSaravia/blob/main/capturas/foto_carrito_0.JPG?raw=true" alt="Captura carrito vacio"/>

Luego de haber confirmado la compra el usuario es redirigido a la direccion /contact donde debe completar
un formulario:
<img src="https://github.com/stick2yourmind/ecommerceRestoBarSaravia/blob/main/capturas/foto_carrito_4.JPG?raw=true" alt="Captura direccion /contact"/>

El formulario se realiza con la libreria formik y es validada al dispararse un evento onChange utilizando la libreria Yup y expresiones regulares:
```
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const firstLastName = /^[A-Za-z ]*$/

export const yupValidationSchema = Yup.object({
    firstName: Yup.string()
      .matches(firstLastName, 'Nombre invalido')
      .max(30, 'Maximo 30 caracteres')
      .required('El nombre es requerido'),
    lastName: Yup.string()
      .matches(firstLastName, 'Apellido invalido')
      .max(30, 'Maximo 30 caracteres')
      .required('El apellido es requerido'),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, 'Telefono invalido')
      .required('El telefono es requerido'),
    email: Yup.string()
      .email('Correo electronico invalido')
      .required('El correo electronico es requerido'),
    emailConfirmation: Yup.string()
      .email('Correo electronico invalido')
      .oneOf([Yup.ref('email'), null], 'Confirmacion ' +
        'de correo electronico invalida')
      .required('El correo electronico es requerido'),
  })
```

Cuando el usuario termina de rellenar un campo se renderiza un componente con un error si es que el 
usuario no paso la validación de dicho campo.
<img src="https://github.com/stick2yourmind/ecommerceRestoBarSaravia/blob/main/capturas/foto_carrito_5.JPG?raw=true" alt="Captura formulario error campo"/>

En caso que el usuario quiera enviar el formulario clickeando "Finalizar compra" se renderizaran todos
los errores en la validaciones de los campos, si es que existen.

En el componente FormCard:
```
            <>
                <h2 className='formTitle'>Datos de contacto</h2>
                <Formik
                    initialValues={initForm}
                    validationSchema={yupValidationSchema}
                    onSubmit={onSubmitHandler}
                >
                    <Form className='formBody'>
                        <TextField label='Nombre' name='firstName' type='text' placeholder="Nombre"/>
                        <TextField label='Apellido' name='lastName' type='text' placeholder="Apellido"/>
                        <TextField label='Telefono' name='phoneNumber' type='tel' placeholder="Telefono"/>
                        <TextField label='Email' name='email' type='email' placeholder="Email"/>
                        <TextField label='Reingrese email' name='emailConfirmation' type='email'
                            placeholder="Reingrese email"/>
                        <button className='btn' type='submit'>Finalizar compra</button>
                    </Form>
                </Formik>
            </>
```
<img src="https://github.com/stick2yourmind/ecommerceRestoBarSaravia/blob/main/capturas/foto_carrito_6.JPG?raw=true" alt="Captura formulario error submit"/>

Al realizar un submit se utiliza el metodo setCartOrder para almacenar los datos de la orden en la base de datos
de Firebase, este metodo retorna el id de la orden. Adicionalmente se vacia el carrito y se cambia el estado de submitFinished, este cambio de estado permitira que se renderización de un mensaje indicando al usuario el id
de se orden.

En el componente FormCard:
```
    const onSubmitHandler = (values) => {
        let userData = {
                firstName:values.firstName,
                lastName: values.lastName,
                phoneNumber: values.phoneNumber,
                email:values.email
            }
        setCartOrder(cart,userData).then((cartOrder) => {
            setSubmitFinished(cartOrder)
            clearCart()
        })
    }
```

En src/services/firebase/query.js:
NOTA: se añade timestamp/fecha en el backend.

```
export const setCartOrder = async (cart, userData) =>{
    let newCartOrder = null
    try{
        const dbReference = doc(db, "cart_orders", userData.email)
        newCartOrder = {...cart, timestamp: serverTimestamp(), ...userData}
        const userCollectionReference = collection(dbReference, 'orders')
        const docRef = await addDoc(userCollectionReference, newCartOrder)
        newCartOrder['id'] = docRef.id
    }
    catch(error){
        newCartOrder = {error}
    }
    finally{
        return newCartOrder
    }
}
```

<img src="https://github.com/stick2yourmind/ecommerceRestoBarSaravia/blob/main/capturas/foto_carrito_7.JPG?raw=true" alt="Captura id de la orden generada"/>

Las ordenes son almacenadas en la base de datos de firebase en:

coleccion "cart_orders" -> documento "EMAIL_USUARIO" -> collecion "orders" -> documentos

<img src="https://github.com/stick2yourmind/ecommerceRestoBarSaravia/blob/main/capturas/foto_firebase_1.JPG?raw=true" alt="Captura de almacenamiento de ordenes en la base de datos de Firebase"/>

En caso que el usuario ingrese a la direccion /contact sin haber confirmado un compra se renderizara
el siguiente mensaje:
<img src="https://github.com/stick2yourmind/ecommerceRestoBarSaravia/blob/main/capturas/foto_carrito_8.JPG?raw=true" alt="Captura seccion /contact sin haber confirmado una compra"/>
