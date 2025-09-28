/** @format */
import styles from "./page.module.scss";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import { getUser } from "@/shared/actions/user.actions";
import { cartService } from "@/shared/services/cart.service";
import ProductItem from "@/shared/components/ProductItem/ProductItem";
import PriceSummary from "@/shared/components/PriceSummary/PriceSummary";
import Button from "@/shared/components/Button/Button";

const CheckoutPage = async () => {
  const [user, products] = await Promise.all([
    getUser(),
    cartService.getCart(),
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Checkout</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.details}>
          <h3>Order details</h3>
          <CheckoutForm userEmail={user?.email ?? ""} />
        </div>
        <div className={styles.cards}>
          <div className={styles.productsWrapper}>
            {products.data.map((product) => {
              const colorIndex = product.available_colors.indexOf(
                product.color
              );
              const imageSrc = product.images[colorIndex];

              return (
                <ProductItem
                  key={product.id}
                  id={product.id}
                  title={product.name}
                  size={product.size}
                  color={product.color}
                  price={product.price}
                  quantity={product.quantity}
                  imageSrc={imageSrc}
                />
              );
            })}
          </div>
          <div className={styles.summaryWrapper}>
            <PriceSummary products={products.data} />
            <Button type='submit' form='checkout-form' fullWidth>
              Pay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
