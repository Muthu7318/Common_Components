import Accordion from "../Components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "Lable 1",
      content: "content 1",
    },
    {
      id: 2,
      label: "Lable 2",
      content: "content 2",
    },
    {
      id: 3,
      label: "Lable 3",
      content: "content 3",
    },
    {
      id: 4,
      label: "Lable 4",
      content: "content 4",
    },
  ];
  return <Accordion items={items}></Accordion>;
}

export default AccordionPage;
