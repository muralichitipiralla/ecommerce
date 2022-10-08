import React, { Component } from "react";

// * import contextAPI
import { ProductConsumer } from "./../../ContextAPI/Context";

// * import components
import Title from "./../Title/Title";


export default class Store extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="home" />
                  <HomeColumns />
                  //<CartList value={value} />
                  //<CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
