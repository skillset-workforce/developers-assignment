// Explanation.tsx
import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex; /* Enable flexbox */
  flex-direction: column; /* Arrange items vertically */
  justify-content: left; /* Center items vertically */
  align-items: left; /* Center items horizontally */
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  width: 100%;
  min-height: 100vh; /* Make it span the full height of the viewport */
  box-sizing: border-box; /* Ensure padding is included in the height */
`;

const Heading = styled.h3`
  margin-bottom: 10px;
  text-align: center; /* Ensure heading is centered */
`;

const Description = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
  color: blue;
  align-items: left;
`;

const List = styled.ol`
  margin-top: 10px;
  text-align: left; /* Center align list items */
  list-style-position: inside; /* Ensure list markers are inside */
`;

const ListItem = styled.li`
  font-size: 20px;
  margin-bottom: 5px;
  text-align: left; /* Center each list item */
`;

const Explanation: React.FC = () => (
  <Container>
    <Heading>The Assignment</Heading>
    <div style={{ alignItems: "left" }}>
      <Description>Task 1 : Code Refactor</Description>
      <List>
        <ListItem>Move COMPONENTS to independent components</ListItem>
        <ListItem>CSS - Organized CSS, preferable styled-components</ListItem>
      </List>
    </div>
    <div style={{ alignItems: "left" }}>
      <Description>Task 2 : Render between Edit/Player Mode:</Description>
      <List>
        <ListItem>
          In Edit mode, you can add components and modify them.
        </ListItem>
        <ListItem>In Player Mode, you can only view the results.</ListItem>
      </List>
    </div>
    <div style={{ alignItems: "left" }}>
      <Description>Task 3 : Add Properties in Edit Mode</Description>
      <List>
        <ListItem>Text Input - Allow to edit: placeholder, width.</ListItem>
        <ListItem>CheckBox - Add Options</ListItem>
        <ListItem>DropDown - Add Options</ListItem>
        <ListItem>
          Text Area - Allow to edit: placeholder, width, borderColor
          (blue/red/black)
        </ListItem>
      </List>
    </div>
    <div style={{ alignItems: "left" }}>
      <Description>Task 4 : Events</Description>
      <Description>
        Define what happens on click on CheckBox/DropDown
      </Description>
      <List>
        <ListItem>Open Popup with the selected item text</ListItem>
        <ListItem>
          Change the background color to different color on every click
        </ListItem>
      </List>
    </div>
  </Container>
);

export default Explanation;
