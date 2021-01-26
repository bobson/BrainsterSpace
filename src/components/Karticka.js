import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

import { Link } from "react-router-dom";

const Karticka = ({ img, title, text, url }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 pt-3 pb-3">
      <Card>
        <div className="inner">
          <CardImg top width="100%" src={img} alt="Card image cap" />
        </div>
        <CardBody>
          <CardTitle className="font-weight-bold" tag="h5">
            {title}
          </CardTitle>
          <CardText>{text}</CardText>
          {title === "Едукација" ? (
            <a href={url} target="_blank" className="stretched-link"></a>
          ) : (
            <Link to={`${url}`} className="stretched-link"></Link>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default Karticka;
