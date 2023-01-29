import { Component } from "react";

export type TabProps = {
  title: string;
  content: React.ReactNode;
};

export type Props = {
  tabs: TabProps[];
};

type States = {
  activeTab: number;
};

class Tabs extends Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {
      activeTab: 0,
    };
  }

  onClickTabItem(tabIndex: number) {
    this.setState({ activeTab: tabIndex });
  }

  render() {
    const {
      props: { tabs },
      state: { activeTab },
    } = this;

    return (
      <div className="tabs">
        <nav className="flex py-5 border-b border-solid dark:border-gray-600 border-gray-200">
          {tabs.map((tab, index) => {
            const activeStyle = index === activeTab ? "text-pink-400" : "";
            return (
              <button
                data-testid={`tab-button-${index}`}
                key={tab.title}
                onClick={() => this.setState({ activeTab: index })}
                className={`${activeStyle} block px-5`}
              >
                {tab.title}
              </button>
            );
          })}
        </nav>
        <div className="py-5">{tabs[activeTab].content}</div>
      </div>
    );
  }
}

export default Tabs;
