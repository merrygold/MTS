import { useState } from "react";


function Accordion_sm() {
    const [activeDefault, setActiveDefault] = useState(0);
    const defaultAccordion = [
        {
            title: "How can we improve your learning ?",
            text:
                "We can improve your learning by provding you the best facilities of courses.",
            bg: "primary",
        },
        {
            title: "What can you learn from our website?",
            text:
                "You can learn different useful things from our website like BlockChain etc.",

            bg: "info",
        },
        {
            title: "Can we help you make right decisions?",
            text:
                "Yes, we can. You can ask us on our email of MechTech solutions.",

            bg: "success",
            
        },
        {
            title: "Can you contact us ?",
            text:
                "You can contact us by sending us mail.",

            bg: "success",
        },
        {
            title: "Will we continue improving ?",
            text:
                " Yes we will continue making necessary improvements and updates.",

            bg: "success",
        },
        
    ];
  return (
    <>
      <div
                className="dlab-accordion accordion-sm"
                id="accordionFaq"
                defaultActiveKey="0"
            >
                {defaultAccordion.map((d, i) => (
                    <div className="card" key={i}>
                        <div
                            eventKey={`${i}`}
                            className="card-header"
                            onClick={() =>
                                setActiveDefault(activeDefault === i ? -1 : i)
                            }
                        >
                            <h5 className="dlab-title">
                                <a href="javascript:void(0);"
                                    className={`${
                                        activeDefault === i ? "" : "collapsed"
                                    }`}
                                    onClick={() =>
                                        setActiveDefault(
                                            activeDefault === i ? -1 : i
                                        )
                                    }
                                >
                                    {" "}
                                    {d.title}
                                </a>
                            </h5>
                        </div>
                        {/* <div className="collapse show" eventKey={`${i}`}>
                            <div className="card-body">
                                <p className="m-b0">{d.text}</p>
                            </div>
                        </div> */}
                        <div className={`${
                                        activeDefault === i ? "collapsed show" : "collapsed"
                                    }`} eventKey={`${i}`} onClick={() =>
                                        setActiveDefault(
                                            activeDefault === i ? -1 : i
                                        )
                                    }>
                            <div className="card-body">
                                <p className="m-b0">{d.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    </>
  )
}

export default Accordion_sm;