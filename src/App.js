import { useState } from 'react';
import Element from './components/Element';

function App() {
  const [elements] = useState([
    {
      label: "First Name",
      type: "text",
      uid: "0001"
    },
    {
      label: "Last Name",
      type: "text",
      uid: "0002"
    },
    {
      label: "Email",
      type: "text",
      uid: "0004"
    },
    {
      label: "Marital status",
      type: "select",
      uid: "0005",
      options: [
        {
          option_label: "Single"
        },
        {
          option_label: "Married"
        }
      ]
    },
    {
      label: "I am of legal age",
      type: "checkbox",
      uid: "0003"
    },
    {
      label: "Gender",
      type: "radio",
      uid: "0006",
      options: [
        {
          option_label: "Male"
        },
        {
          option_label: "Female"
        },
        {
          option_label: "Other"
        }
      ]
    }
  ]);

  const [selectedElements, setSelectedElements] = useState([]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5">
          <div className="h3 mb-4">Fields</div>
          <form>
            {elements ? elements.map((field, i) => {
              return (
                <div className="row align-items-center" key={i}>
                  <div className="col-9">
                    <Element field={field} />
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-dark mt-3"
                      onClick={(event) => {
                        setSelectedElements(selectedElements.concat([field]));
                        event.preventDefault();
                      }}
                    >Add</button>
                  </div>
                </div>
              )
            }
            ) : null}
          </form>
        </div>
        <div className="col-md-6 mt-5">
          <div className="h3 mb-4">Form preview</div>
          <form>
            {selectedElements ? selectedElements.map((field, i) => {
              return (
                <div className="row align-items-center" key={i}>
                  <div className="col-9">
                    <Element field={field} />
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-dark mt-3"
                      onClick={(event) => {
                        setSelectedElements(selectedElements.filter(element => element.uid !== field.uid));
                        event.preventDefault();
                      }}
                    >Remove</button>
                  </div>
                </div>
              )
            }
            ) : null}

            <button
              type="submit"
              className="btn btn-dark mt-4"
              onClick={(event) => {
                event.preventDefault();
              }}
            >Submit</button>
          </form>
        </div>
      </div>
    </div>

  );
}

export default App;
