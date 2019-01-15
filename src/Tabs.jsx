import React from "react";
import classnames from "classnames";
import { TabContent, TabPane, Nav, NavItem, NavLink, Badge } from "reactstrap";

import { tabNames, tabsData, tabShortcuts } from "./data/tabsData"; //tabs data

const shortcut = require("./assets/js/shortcut").default; //short lib

//#region css
import "./assets/styles/common.css";
import "./assets/styles/index.css";
//#endregion

//#region TabPane Data returl UL with names as Li
function TabData(names) {
  let { data } = names;
  return (
    <ul className="tab-affi">
      {data.map(name => (
        <li>
          <a href="#">{name}</a>
        </li>
      ))}
    </ul>
  );
}
//#endregion

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    //onclick tab change
    this.toggle = this.toggle.bind(this);

    this.state = {
      activeTab: "0" //default selected tab
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  navigateTabs(direction) {
    let { activeTab } = this.state;
    switch (direction) {
      case "left":
        activeTab--;
        break;
      case "right":
        activeTab++;
        break;
    }
    if (activeTab >= 0 && activeTab < tabNames.length) {
      this.toggle(activeTab.toString());
    }
  }
  componentDidMount() {
    //#region register the indivial tab shortcuts
    for (let s in tabShortcuts) {
      shortcut.add(
        tabShortcuts[s],
        function() {
          this.toggle(s);
        }.bind(this)
      );
    }
    //#endregion

    //#region tab navigation shortcuts fwd & backword
    shortcut.add(
      "ctrl+shift+Z",
      function() {
        this.navigateTabs("left");
      }.bind(this)
    );

    shortcut.add(
      "ctrl+shift+Y",
      function() {
        this.navigateTabs("right");
      }.bind(this)
    );
    //#endregion
  }
  render() {
    //genrate tabnames & tabpanes
    let tabNavs = [];
    let tabPanes = [];
    for (let t in tabNames) {
      //#region tabs variables
      let tab = tabNames[t];
      let tabData = tabsData[tab.id];
      let tabShortcut = tabShortcuts[tab.id];
      //#endregion

      //#region Genrate tabNav
      tabNavs.push(
        <NavItem key={tab.id}>
          <NavLink
            className={classnames({
              active: this.state.activeTab === tab.id
            })}
            onClick={() => {
              this.toggle(tab.id);
            }}
          >
            <div>
              {tab.tabName}{" "}
              <Badge color="info" pill>
                {tabShortcut}
              </Badge>
            </div>
          </NavLink>
        </NavItem>
      );
      //#endregion

      //#region Genrate TabPane
      tabPanes.push(
        <TabPane tabId={tab.id}>
          <ul>{<TabData data={tabData} />}</ul>
        </TabPane>
      );
      //#endregion
    }

    return (
      <div>
        <Nav tabs className="nav nav-tabs tab-btn nav nav-tabs">
          {tabNavs}
        </Nav>
        <TabContent
          className="tab-content tab-content tab-wrap pt10 pb10 pr10 pl10"
          activeTab={this.state.activeTab}
        >
          {tabPanes}
        </TabContent>
      </div>
    );
  }
}
