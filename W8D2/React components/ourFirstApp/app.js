const products = [
    'apple',
    'banana',
    'pineapple',
    'orange',
    'kiwi'
];

const Header = (props) => {
    console.log(props)
    return (
        <header>
            <h1>{props.appName}</h1>
            <p>{props.description}</p>
        </header>
    );
};


const Title = () => {
    return (
        <h3>My products</h3>
    );
};

const ProductItem = (props) => {
    return (
        <p>{props.productName}</p>
    );
};

const ProductList = (props) => {
    // props is regular JS object
    console.log('props', props);

    const myProductList = props.listOfProducts.map((product, index) => {

        return <ProductItem key={index} productName={product} />

    });
    console.log(myProductList);

    return (
        <div>
            <Title />
            {myProductList}
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Header appName='Our App' description='This presents list of products' />
            <hr />
            <ProductList listOfProducts={products} />
        </div>
    );
};


const rootElement = document.querySelector('.root');
ReactDOM.render(<App />, rootElement);