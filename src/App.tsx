import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card/Card";
import DetailCard from "./layouts/page/DetailCard";

function App() {
  return (
    // <Card title={"Заголовок"} 
    // shortDiscription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum tincidunt urna vitae mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam aliquam felis nec mi dictum, in rhoncus felis blandit. Integer luctus magna a felis dignissim, id posuere ligula dignissim. Phasellus nunc massa, varius vel libero."}
    // rating={5}
    // age={18}
    // interest={["Питер","Топоры","Цирк"]}
    // duration={"30 лет"}
    // complexity={"Тяжело"}
    // type={"Пеший"}
    // url={"example"}
    // />
    <DetailCard 
    title={"Заголовок"}
    detailDiscription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque odio vestibulum, condimentum libero sit amet, ultrices neque. Quisque vestibulum mollis ipsum, id maximus felis consequat ac. Pellentesque in suscipit ipsum, eu hendrerit mauris. Quisque venenatis risus nunc, ac vestibulum tortor ullamcorper non. Nullam ultricies ante vel ex eleifend, ut ullamcorper felis fermentum. Quisque fringilla erat nec nisi tincidunt accumsan. Sed imperdiet ipsum at enim semper convallis. Integer in justo ornare ex euismod eleifend. Morbi tincidunt placerat erat, sed tempor orci elementum et. Nullam non feugiat nisi, nec laoreet erat. Duis sollicitudin semper felis id fermentum. Sed eu urna a ipsum posuere posuere. Etiam vitae dapibus velit. Nam ornare sollicitudin euismod. Nullam sed nibh ut magna porta bibendum id sit amet mi. In pulvinar vulputate metus non fringilla. Suspendisse sit amet mollis lectus. Vivamus mollis lectus non porta volutpat. Nullam imperdiet massa sit amet mi dapibus, vel dapibus ipsum tristique. Praesent feugiat euismod lectus, tristique semper justo iaculis ac. Mauris ut purus a lorem molestie rutrum. Morbi eget hendrerit massa, at convallis orci. Sed ultricies lacinia elit eget ultrices. Praesent quis leo cursus, pharetra erat id, porta turpis. Pellentesque ut ipsum gravida, elementum justo sit amet, maximus nibh. Aliquam molestie."}
    reviews={[{
      name: "Anton",
      comment: "Its cool!",
      rating : 5
    },
    {
      name: "Kris",
      comment: "bruh....",
      rating : 2
    }]}
    age = {18}
    rating={5}
    duration={"3 года"}
    />
  );
}

export default App;
