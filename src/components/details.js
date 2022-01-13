export default function Details(props) {
  return (
    <div className="col-lg-5 col-md-12 col-sm-12 m-2 p-2 details">
      <div className="row align-items-center">
        <div className="col-4">
          <img src={props.flag} alt={props.country} className="flag-image" />
          <p className="mb-0">
            {props.country} ({props.capital})
          </p>
        </div>
        <div className="col-8">
          <p className="mb-0">
            <b>REGION:</b> {props.region} ({props.subregion})
          </p>
          <p className="mb-0">
            <b>POPULATION:</b> {props.population}
          </p>
          {props.border.length >= 1 && props.border[0] !== undefined && (
            <div>
              <b className="d-inline">BORDERS: </b>
              {props.border.map((res, _) => (
                <div key={res} className="d-inline">
                  <p className="d-inline">
                    {props.border[_ + 1] ? `${res}, ` : `${res}`}
                  </p>
                  <br />
                </div>
              ))}
            </div>
          )}
          {Object.values(props.lang).length >= 1 &&
            Object.values(props.lang)[0] !== undefined && (
              <div>
                <b className="d-inline">LANGUAGES: </b>
                {Object.values(props.lang).map((res, _) => (
                  <div key={res} className="d-inline">
                    <p className="d-inline">
                      {Object.values(props.lang)[_ + 1] ? `${res}, ` : `${res}`}
                    </p>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
