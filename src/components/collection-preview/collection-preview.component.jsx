import React from "react";
import { withRouter } from "react-router-dom";

import {
  CollectionPreviewItemContainer,
  TitleContainer,
  PreviewContainer
} from "./collection-preview.styles";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewItemContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {" "}
      {title.toUpperCase()}{" "}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewItemContainer>
);

export default withRouter(CollectionPreview);
