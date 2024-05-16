import Hero from "@/components/hero/Hero";
import Products from "./products/page";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import Form from "@/components/form/form";
const category = ["Cameras", "Laptops", "Tablets", "Mouse"];
export default function Home({ data, limit }) {
  return (
    <main>
      <Hero />
      <br />
      <br />
      <br />
      <br />
      <Container maxWidth="xl">
        <div className="category">
          <h2>Popular products</h2>
          <div className="categories">
            {category.map((item, inx) => (
              <Button key={inx} variant="outlined">
                {item}
              </Button>
            ))}
          </div>
        </div>
      </Container>
      <br />
      <br />
      <br />
      <Products data={data} />
      <br />
      <br />
      <br />
      <Form />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}
