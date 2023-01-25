import express, { Request, Response } from "express";
import cors from "cors";
import { data } from "./data"

const app = express();
app.use(express.json());
app.use(cors());

const userInput = require("readline-sync");
let op = 11;

while (op !== 0) {
    app.listen(3003, () => {
        console.log("Server is running in http://localhost:3003");
        console.log("Server is ready to be shut down\n you can press Ctrl+C")
      });
  // Running test
    
    app.post("/data", (req: Request, res: Response) => {
      let runTest = req.headers.test;

      try {
        if (!runTest) {
          const anErr = new Error("Couldn't find necessary stuff");
          anErr.name = "connectionIssue";
          throw anErr;
        }
        res.status(200).send("Servidor rodando na porta 3003")
        console.log("Servidor rodando na porta 3003")
        // Catches!
      } catch (err: any) {
        if (err.name === "connectionIssue") res.status(401).send(err.message);
        else if (err.name === "connectionIssue") {
          res.status(422).send(err.message);
        } else if (err.name === "connectionIssue") {
          res.status(404).send(err.message);
        } else if (err.name === "connectionIssue") {
          res.status(409).send(err.message);
        } else {
          res.status(500).send(err.message);
        }
      }
    });
  
  // MENU
  console.table(data)
  console.log(op)
  op=userInput.question("Choose one option:\n1 -> Add Motorcycle\n2 -> Change Motorcycle's Price\n3 -> Remove Motorcycle\nOp: ")

  if (op===1) {
  app.post("/data", (req: Request, res: Response) => {
    let runTest = req.headers.test;

    try {
      if (!runTest) {
        const anErr = new Error("Couldn't find necessary stuff");
        anErr.name = "connectionIssue";
        throw anErr;
      }
      res.status(200).send("Servidor rodando na porta 3003");

      // Catches!
    } catch (err: any) {
      if (err.name === "connectionIssue") res.status(401).send(err.message);
      else if (err.name === "dataMusicNotFound") {
        res.status(422).send(err.message);
      } else if (err.name === "connectionIssue") {
        res.status(404).send(err.message);
      } else if (err.name === "trackAlreadyExists") {
        res.status(409).send(err.message);
      } else {
        res.status(500).send(err.message);
      }
    }
}
  );
  }

  
}
