import * as Solids from "@fortawesome/free-solid-svg-icons";
import * as Regulars from "@fortawesome/free-regular-svg-icons";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

export default function FontAwesome() {
  const solidList = Object.keys(Solids)
    .filter((key) => key !== "fas" && key !== "prefix")
    .map((icon) => Solids[icon]);

  const regularList = Object.keys(Regulars)
    .filter((key) => key !== "fas" && key !== "prefix")
    .map((icon) => Regulars[icon]);

  const brandList = Object.keys(Brands)
    .filter((key) => key !== "fas" && key !== "prefix")
    .map((icon) => Brands[icon]);

  library.add(...solidList);
  library.add(...regularList);
  library.add(...brandList);
  return <></>;
}

