import {
  AiOutlineDelete,
  Footer_default
} from "/build/_shared/chunk-HV6WZVQ3.js";
import {
  Navbar_default
} from "/build/_shared/chunk-Z2C7QERV.js";
import {
  FiShoppingCart
} from "/build/_shared/chunk-ILUR2CXR.js";
import {
  F,
  Image,
  Money,
  flattenConnection
} from "/build/_shared/chunk-VAI2PXO3.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-3DYM7AG2.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-4VTZQJYZ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/Components/Cart.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CartLineItems({ linesObj }) {
  const lines = flattenConnection(linesObj);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-8", children: lines.map((line) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LineItem, { lineItem: line }, line.id, false, {
      fileName: "app/Components/Cart.jsx",
      lineNumber: 10,
      columnNumber: 16
    }, this);
  }) }, void 0, false, {
    fileName: "app/Components/Cart.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
function ItemRemoveButton({ lineIds }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    F,
    {
      route: "/cart",
      action: F.ACTIONS.LinesRemove,
      inputs: { lineIds },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          className: "bg-white border-black text-black hover:text-white hover:bg-black rounded-md font-small text-center my-2 max-w-xl leading-none border w-10 h-10 flex items-center justify-center",
          type: "submit",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconRemove, {}, void 0, false, {
            fileName: "app/Components/Cart.jsx",
            lineNumber: 28,
            columnNumber: 9
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/Components/Cart.jsx",
          lineNumber: 24,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/Components/Cart.jsx",
      lineNumber: 18,
      columnNumber: 5
    },
    this
  );
}
function IconRemove() {
  return (
    // <svg
    //   fill="transparent"
    //   stroke="currentColor"
    //   viewBox="0 0 20 20"
    //   className="w-5 h-5"
    // >
    //   <title>Remove</title>
    //   <path
    //     d="M4 6H16"
    //     strokeWidth="1.25"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path d="M8.5 9V14" strokeLinecap="round" strokeLinejoin="round" />
    //   <path d="M11.5 9V14" strokeLinecap="round" strokeLinejoin="round" />
    //   <path
    //     d="M5.5 6L6 17H14L14.5 6"
    //     strokeWidth="1.25"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path
    //     d="M8 6L8 5C8 4 8.75 3 10 3C11.25 3 12 4 12 5V6"
    //     strokeWidth="1.25"
    //   />
    // </svg>
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AiOutlineDelete, {}, void 0, false, {
      fileName: "app/Components/Cart.jsx",
      lineNumber: 62,
      columnNumber: 5
    }, this)
  );
}
function LineItem({ lineItem }) {
  const { merchandise, quantity } = lineItem;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "all-info d-flex mt-5 row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-5   mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/product/${merchandise.product.handle}`, className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Image,
      {
        data: merchandise.image,
        className: "",
        style: { objectFit: "contain", transform: "scale(1.4)" }
      },
      void 0,
      false,
      {
        fileName: "app/Components/Cart.jsx",
        lineNumber: 73,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/Components/Cart.jsx",
      lineNumber: 72,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/Components/Cart.jsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "protien-info", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          to: `/products/${merchandise.product.handle}`,
          className: "text-start",
          id: "protien-name",
          children: merchandise.product.title
        },
        void 0,
        false,
        {
          fileName: "app/Components/Cart.jsx",
          lineNumber: 87,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: lineItem.cost.totalAmount }, void 0, false, {
        fileName: "app/Components/Cart.jsx",
        lineNumber: 94,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/Components/Cart.jsx",
      lineNumber: 86,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/Components/Cart.jsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemRemoveButton, { lineIds: [lineItem.id] }, void 0, false, {
      fileName: "app/Components/Cart.jsx",
      lineNumber: 100,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/Components/Cart.jsx",
      lineNumber: 99,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/Components/Cart.jsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}
function CartSummary({ cost, checkoutUrl }) {
  if (!checkoutUrl)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-1 px-4 py-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-start mt-2", id: "order", children: "My Order Summary" }, void 0, false, {
      fileName: "app/Components/Cart.jsx",
      lineNumber: 119,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-start d-flex justify-content-between mt-4", id: "mrp", children: [
      "Subtotal",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: cost?.subtotalAmount?.amount ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: cost?.subtotalAmount }, void 0, false, {
        fileName: "app/Components/Cart.jsx",
        lineNumber: 126,
        columnNumber: 15
      }, this) : "-" }, void 0, false, {
        fileName: "app/Components/Cart.jsx",
        lineNumber: 124,
        columnNumber: 11
      }, this),
      " "
    ] }, void 0, true, {
      fileName: "app/Components/Cart.jsx",
      lineNumber: 122,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-start d-flex justify-content-between mt-4", id: "mrp", children: [
      "Total",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-success", children: cost?.totalAmount?.amount ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: cost?.totalAmount }, void 0, false, {
        fileName: "app/Components/Cart.jsx",
        lineNumber: 136,
        columnNumber: 15
      }, this) : "-" }, void 0, false, {
        fileName: "app/Components/Cart.jsx",
        lineNumber: 134,
        columnNumber: 11
      }, this),
      " "
    ] }, void 0, true, {
      fileName: "app/Components/Cart.jsx",
      lineNumber: 132,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { className: "bg-light mt-3 " }, void 0, false, {
      fileName: "app/Components/Cart.jsx",
      lineNumber: 142,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        to: checkoutUrl,
        className: "btn btn-warning w-100 text-dark font-weight-bold",
        children: "Checkout"
      },
      void 0,
      false,
      {
        fileName: "app/Components/Cart.jsx",
        lineNumber: 143,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/Components/Cart.jsx",
    lineNumber: 118,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/Components/Cart.jsx",
    lineNumber: 117,
    columnNumber: 5
  }, this);
}

// app/routes/Cart/index.jsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var Cart = () => {
  const { cart } = useLoaderData();
  const [btnClass, setBtnClass] = (0, import_react3.useState)("transparent");
  function toggleColor() {
    if (btnClass === "transparent") {
      setBtnClass("red-color");
    } else {
      setBtnClass("transparent");
    }
  }
  const [num, setNum] = (0, import_react3.useState)(0);
  const incNum = () => {
    setNum(num + 1);
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("Please add items to cart");
      setNum(0);
    }
  };
  const removeItem = () => {
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Navbar_default, {}, void 0, false, {
      fileName: "app/routes/Cart/index.jsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "main-div ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container-fullwidth mx-5 mt-4", children: cart?.totalQuantity > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "row ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "div",
        {
          className: "col h-100 col-12 col-sm-12 col-md-12 col-lg-7",
          id: "leftside",
          children: cart?.totalQuantity > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CartLineItems, { linesObj: cart.lines }, void 0, false, {
            fileName: "app/routes/Cart/index.jsx",
            lineNumber: 80,
            columnNumber: 19
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/Cart/index.jsx",
          lineNumber: 75,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col  h-100 col-12 col-sm-12 col-md-12 col-lg-5 order-summary mt-1 mt-md-3 px-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        CartSummary,
        {
          cost: cart?.cost || 0,
          checkoutUrl: cart?.checkoutUrl || ""
        },
        void 0,
        false,
        {
          fileName: "app/routes/Cart/index.jsx",
          lineNumber: 85,
          columnNumber: 17
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/Cart/index.jsx",
        lineNumber: 84,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/Cart/index.jsx",
      lineNumber: 74,
      columnNumber: 13
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "row d-flex justify-content-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col-12 d-flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FiShoppingCart, { size: 25 }, void 0, false, {
        fileName: "app/routes/Cart/index.jsx",
        lineNumber: 94,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/Cart/index.jsx",
        lineNumber: 93,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col-12 mt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { className: " px-3 text-center", children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-center", style: { fontWeight: "bold" }, children: [
          "Your Cart is ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: { color: "#ff2828" }, children: "Empty!" }, void 0, false, {
            fileName: "app/routes/Cart/index.jsx",
            lineNumber: 100,
            columnNumber: 34
          }, this),
          " "
        ] }, void 0, true, {
          fileName: "app/routes/Cart/index.jsx",
          lineNumber: 99,
          columnNumber: 19
        }, this),
        " "
      ] }, void 0, true, {
        fileName: "app/routes/Cart/index.jsx",
        lineNumber: 97,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/Cart/index.jsx",
        lineNumber: 96,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col-12 text-center mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: { fontSize: "1.3rem" }, className: "", children: "Please add some items to your cart." }, void 0, false, {
        fileName: "app/routes/Cart/index.jsx",
        lineNumber: 105,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/Cart/index.jsx",
        lineNumber: 104,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col-12 text-center mt-3 mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "btn blog-btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "", children: "RETURN TO SHOP" }, void 0, false, {
        fileName: "app/routes/Cart/index.jsx",
        lineNumber: 111,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/Cart/index.jsx",
        lineNumber: 110,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/Cart/index.jsx",
        lineNumber: 109,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/Cart/index.jsx",
      lineNumber: 92,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/Cart/index.jsx",
      lineNumber: 72,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/Cart/index.jsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Footer_default, {}, void 0, false, {
      fileName: "app/routes/Cart/index.jsx",
      lineNumber: 119,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/Cart/index.jsx",
    lineNumber: 69,
    columnNumber: 5
  }, this);
};
var Cart_default = Cart;
export {
  Cart_default as default
};
//# sourceMappingURL=/build/routes/Cart-4AQUNBTU.js.map
