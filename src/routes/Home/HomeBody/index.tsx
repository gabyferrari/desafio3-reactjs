import { Link } from "react-router-dom";
import Button from "../../../components/Button";

export default function HomeBody() {

  return (
    <main>
      <section>
        <div className="container-home">
          <div className="title-style mt30">
            <h2>Desafio Github API</h2>
            <h3>DevSuperior - Escola de programação</h3>
          </div>
          <div className="dflex">
            <Link to="/search">
              <Button text="Começar" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
