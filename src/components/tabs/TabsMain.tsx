import Tabs from "./Tabs";
import "./Tabs.scss";

const TabsMain = () => {
  const tabs = [
    {
      id: 1,
      title: "Home",
      content:
        "Welcome to the Home tab. This is where your main content resides.",
    },
    {
      id: 2,
      title: "About",
      content:
        "The About tab contains information about our organization and mission.",
    },
    {
      id: 3,
      title: "Contact",
      content: "Reach out to us through the Contact tab for more information.",
    },
  ];

  return (
    <div className="tabs-page">
      <Tabs data={tabs} />
    </div>
  );
};

export default TabsMain;
