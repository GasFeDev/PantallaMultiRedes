import React, { useState } from "react";
import { Select, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import "./Body.css";

const Body = () => {
  const [messageText, setMessageText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [showInput, setShowInput] = useState(true);
  const { Option } = Select;

  const handleImageChange = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setShowInput(false);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div>
      <div className="container">
        <div className="onecolumn">
          <p className="parraf">Seleccione la red a postear</p>
          <Select placeholder="Seleccione las Redes a Postear">
            <Option value="Facebook">Facebook</Option>
            <Option value="Linkedin">Linkedin</Option>
            <Option value="Twitter">Twitter</Option>
          </Select>
          <p className="parraf">Que se desea? o Tags</p>
          <TextArea
            rows={1}
            placeholder="Escriba aquí lo que desea"
            resize="block"
            className="textarea"
          />
          <p className="parraf">Message</p>
          <TextArea
            rows={15}
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="Escriba aquí un mensaje"
            className="textarea"
          />
        </div>
        <div className="twocolumn">
          <div className="messagePreview">
            <div className="imgcont">
              {showInput ? (
                <input type="file" onChange={handleImageChange} />
              ) : null}
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="La imagen no se ha podido cargar correctamente"
                  className="img"
                />
              )}
            </div>
            <p className="preview">PREVIEW</p>
            <div className="messagePreviewPreview">
              <p>{messageText}</p>
            </div>
            <div className="buttons">
              <Button type="primary" className="but">
                Aprobar
              </Button>
              <Button danger="danger" className="but">
                Rechazar
              </Button>
            </div>
          </div>
          <div className="post">
            <h3>Post Agendados</h3>
            <ul>
              <li className="ul">Articulos de belleza-twitter 04-04-23</li>
              <li className="ul">Tips para belleza-facebook 05-07-23</li>
              <li className="ul">Tips para belleza-twitter 05-07-23</li>
              <li className="ul">Tips para belleza-instagram 05-07-23</li>
              <li className="ul">Otros articulos-facebook 04-08-23</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="threecolumn">
        <Button className="butfinish" type="primary">
          Posting
        </Button>
        <Button className="butfinish" danger="danger">
          Delete Template
        </Button>
      </div>
    </div>
  );
};

export default Body;
