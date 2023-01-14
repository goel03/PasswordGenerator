import "./styles.css";
import Range from "react-range-progress";
import { useState } from "react";
import { IconContext } from "react-icons";
import { MdContentCopy } from "react-icons/md";
import copy from "copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const pswdChars = [
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "abcdefghijklmnopqrstuvwxyz",
  "0123456789",
  "\\ !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"
];

export default function App() {
  const DEFAULT_VALUE = 25;

  const [value, setValue] = useState(DEFAULT_VALUE);
  const [rand, setrand] = useState("**********");
  const [selected, setSelected] = useState([true, false, false, false]);
  const [cop, setcopy] = useState(false);
  const [count, setcount] = useState(1);
  const [myArray, updateMyArray] = useState([]);

  const handleSelect = (event) => {
    const select = selected;
    const index = event.target.value;
    select[index] = !select[index];
    if (select[index]) {
      setcount(count + 1);
    } else {
      setcount(count - 1);
    }
    setSelected(select);
    generaterandom();
  };

  var onRangeChanged = (value) => {
    setValue(value);
  };

  function generaterandom(e) {
    var pswd = "";
    var len = value;
    console.log(len);
    while (len > 0) {
      const i = Math.floor(Math.random() * 4);
      if (!selected[i]) continue;
      pswd += pswdChars[i].charAt(
        Math.floor(Math.random() * pswdChars[i].length)
      );
      len--;
    }
    updateMyArray((arr) => [...arr, `${pswd}`]);
    console.log(myArray);
    setrand(pswd);
  }

  return (
    <div>
      <div className="rect1">
        <div className="text" style={{ backgroundColor: "#24232b" }}>
          {rand}{" "}
        </div>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div
          className="copy"
          onClick={() => {
            setcopy({ cop: true });
            copy(rand);
            toast.success("Copied ");
          }}
        >
          <IconContext.Provider
            value={{
              style: { color: cop ? "green" : "#474a56" },
              size: "1.6rem"
            }}
          >
            <MdContentCopy />
          </IconContext.Provider>
        </div>
      </div>
      <div className="rect2">
        <p className="char" style={{ backgroundColor: "#24232b" }}>
          Character length
        </p>
        <p className="val" style={{ backgroundColor: "#24232b" }}>
          {value}
        </p>
        <div className="range" style={{ borderRadius: "50px" }}>
          <Range
            value={value}
            fillColor={{
              r: 20,
              g: 150,
              b: 100,
              a: 0.75
            }}
            trackColor={{
              r: 10,
              g: 10,
              b: 0,
              a: 0.5
            }}
            height={12}
            onChange={onRangeChanged}
          />
        </div>
        <div className="check" style={{ backgroundColor: "#24232b" }}>
          <input
            type="checkbox"
            checked={selected[0]}
            onChange={handleSelect}
            value="0"
          />
          <div className="one">Include Uppercase Letters</div>
        </div>
        <br />

        <div className="check1" style={{ backgroundColor: "#24232b" }}>
          <input
            type="checkbox"
            checked={selected[1]}
            onChange={handleSelect}
            value="1"
          />
          <div className="one">Include Lowercase Letters</div>
        </div>

        <br />
        <div className="check2" style={{ backgroundColor: "#24232b" }}>
          <input
            type="checkbox"
            checked={selected[2]}
            onChange={handleSelect}
            value="2"
          />
          <div className="one">Include Number</div>
        </div>

        <br />
        <div className="check3" style={{ backgroundColor: "#24232b" }}>
          <input
            type="checkbox"
            checked={selected[3]}
            onChange={handleSelect}
            value="3"
          />
          <div className="one">Include Symbol</div>
        </div>
        <br />
        <div className="strength">
          <div className="Home_strength__IDySN">
            <div className="Home_strengthLeft__d08w-">STRENGTH</div>
            <div className="Home_strengthRight__6KjTC">
              <div
                className="Home_indicator__m2xFq"
                style={{ backgroundColor: count > 0 ? "aqua" : "" }}
              ></div>
              <div
                className="Home_indicator__m2xFq1"
                style={{ backgroundColor: count > 1 ? "aqua" : "" }}
              ></div>
              <div
                className="Home_indicator__m2xFq2"
                style={{ backgroundColor: count > 2 ? "aqua" : "" }}
              ></div>
              <div
                className="Home_indicator__m2xFq3"
                style={{ backgroundColor: count > 3 ? "aqua" : "" }}
              ></div>
            </div>
          </div>
        </div>
        <button onClick={generaterandom}> Generate </button>
      </div>

      {/* <div className="rect3">
        <div className="text" style={{ backgroundColor: "#24232b" }}>
          {myArray[myArray.length - 1]}
        </div>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div
          className="copy2"
          onClick={() => {
            setcopy({ cop: true });
            copy(rand);
            toast.success("Copied ");
          }}
        >
          <IconContext.Provider
            value={{
              style: { color: cop ? "green" : "#474a56" },
              size: "1.6rem"
            }}
          >
            <MdContentCopy />
          </IconContext.Provider>
        </div>
      </div> */}

      {/* <div className="rect4">
        <div className="text" style={{ backgroundColor: "#24232b" }}>
          {myArray[myArray.length - 2]}
        </div>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div
          className="copy3"
          onClick={() => {
            setcopy({ cop: true });
            copy(rand);
            toast.success("Copied ");
          }}
        >
          <IconContext.Provider
            value={{
              style: { color: cop ? "green" : "#474a56" },
              size: "1.6rem"
            }}
          >
            <MdContentCopy />
          </IconContext.Provider>
        </div>
      </div> */}

      {/* <div className="rect5">
        <div className="text" style={{ backgroundColor: "#24232b" }}>
          {myArray[myArray.length - 3]}
        </div>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div
          className="copy4"
          onClick={() => {
            setcopy({ cop: true });
            copy(rand);
            toast.success("Copied ");
          }}
        >
          <IconContext.Provider
            value={{
              style: { color: cop ? "green" : "#474a56" },
              size: "1.6rem"
            }}
          >
            <MdContentCopy />
          </IconContext.Provider>
        </div> */}
       {/* </div> */}
    </div> 
  );
}
