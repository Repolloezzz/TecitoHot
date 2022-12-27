import { getElements, pushElement, editElement, delElement } from "../../functions/mattersFunctions";
export default function handler(req, res) {
  try {
    switch (req.method) {
      case "GET":
        res.status(200).json({ res: getElements() });
        break;

      case "POST":
        pushElement(req.body.head, req.body.element)
        res.status(200).json({ res: "METODO POST"});
        break;

      case "PUT":
        editElement(req.body.head, req.body.element)
        res.status(200).json({ res: "METODO PUT"});
        break;

      case "DELETE":
        delElement(req.body)
        res.status(200).json({ res: "METODO DELETE", content: req.body });
        break;

      default:
        res.status(200).json({ notfound: "El metodo no existe" });
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
}
