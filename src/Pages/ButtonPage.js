import Button from "../Components/Button";
import { GoBell, GoBug, GoDashboard, GoFlame, GoJersey } from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <Button
          success
          rounded
          outline
          classNm="mb-5"
          onClick={() => {}}
          onMouseOver={() => {}}
        >
          <GoJersey></GoJersey>
          button 1
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoBell></GoBell>
          button 2
        </Button>
      </div>
      <div>
        <Button warning>
          <GoBug></GoBug>button 3
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoDashboard></GoDashboard>
          button 4
        </Button>
      </div>
      <div>
        <Button primary rounded>
          <GoFlame></GoFlame>
          button 5
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
