import { users } from "./data";
import * as allTypes from "./type";
import express, { Request, response, Response } from "express";

import cors from "cors";
import { request } from "http";

const app = express();

app.use(express.json());
app.use(cors());

// ---------- EXPLICAÇÃO EXPRESS ---------

app.get("/teste/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const password = req.headers.password;

  console.log(id, password);

  res.status(201).send("Deu bom");
});

// ----------- GET ALL PLAYLIST ----------

app.get("/playlist", (req: Request, res: Response) => {
  const playlists = users.map((user) => {
    return user.playlists;
  });

  res.status(200).send(playlists);
});

//------------ GET PLAYLIST TRACKS --------

app.get("/playlists/tracks", (req: Request, res: Response) => {
  const playlistId = req.query.idPlaylist;
  const userId = req.headers.iduser;

  if (!playlistId && !userId) {
    res.status(400).send("Colocar obrigatoriament um id");
  }

  const userFiltered = users.find((user) => {
    return user.id === userId;
  });

  let playlistFiltered;

  if (userFiltered) {
    playlistFiltered = userFiltered.playlists.find((playlist) => {
      return playlist.id === playlistId;
    });
  } else {
    res.status(200).send("Não há um usuário com o id informado");
  }

  if (playlistFiltered) {
    const allTracks = playlistFiltered.tracks;
    res.status(200).send(allTracks);
  } else {
    res.status(200).send("Não há um playlist com o id informado");
  }
});

//------------ DELETE PLAYLIST -----------

app.delete("/playlists/playlist", (req: Request, res: Response) => {
  const playlistId = req.query.idPlaylist;
  const userId = req.headers.iduser;

  if (!playlistId && !userId) {
    res.status(400).send("Colocar obrigatoriament um id");
  }

  const userFiltered = users.find((user) => {
    return user.id === userId;
  });

  let playlistsActual;

  if (userFiltered) {
    playlistsActual = userFiltered.playlists.filter((playlist) => {
      return playlist.id !== playlistId;
    });
    userFiltered.playlists = playlistsActual;
    res.status(200).send(userFiltered);
  } else {
    res.status(200).send("Não há um usuário com o id informado");
  }
});

//------------- DELETE TRACK --------------

app.delete("/playlists/track", (req: Request, res: Response) => {
  const playlistId = req.query.idPlaylist;
  const userId = req.headers.iduser;
  const trackId = req.query.idtrack;

  if (!playlistId && !userId && !trackId) {
    res.status(400).send("Colocar obrigatoriament um id");
  }

  const userFiltered = users.find((user) => {
    return user.id === userId;
  });
  let playlistFiltered;

  if (userFiltered) {
    playlistFiltered = userFiltered.playlists.find((playlist) => {
      return playlist.id === playlistId;
    });
  } else {
    res.status(200).send("Não há um usuário com o id informado");
  }

  let trackDeleted;

  if (playlistFiltered) {
    trackDeleted = playlistFiltered.tracks.find((track) => {
      return track.id === trackId;
    });
  } else {
    res.status(200).send("Não há um playlist com o id informado");
  }
  if (trackDeleted && playlistFiltered) {
    const tracksActual = playlistFiltered.tracks.filter((track) => {
      return track.id !== trackId;
    });

    playlistFiltered.tracks = tracksActual;

    res.status(200).send(playlistFiltered);
  } else {
    res
      .status(200)
      .send(
        "Não há uma faixa com o id informado, portanto ela não poderá ser deleta"
      );
  }
});

// --------------------- SEARCH PLAYLIST --------------------

app.get("/playlists", (req: Request, res: Response) => {
  const queriedName = req.query.name;

  if (!queriedName) {
    res.status(400).send("Nome da playlist não encontrado!");
  }

  let allPlaylists = users
    .map((user) => {
      return user.playlists;
    })
    .flat(1);

  allPlaylists = allPlaylists.filter((playlist) => {
    return playlist.name === queriedName;
  });

  res.status(200).send(allPlaylists);
});

// -------------------CREATE PLAYLIST -----------------------

app.post("/playlists", (req: Request, res: Response) => {
  const playlistName = req.body.name;
  const userToAdd = req.headers.authorization;

  if (!playlistName || !userToAdd) {
    res.status(400).send("Nome da playlist ou Usuário não encontrado!");
  }

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === userToAdd) {
      users[i].playlists.push({
        id: Date.now().toString(),
        name: playlistName,
        tracks: [],
      });
    }
  }

  res.status(200).send({ users });
});

// -------------------ADD TRACK NA PLAYLIST -------------

app.put("/playlists/:playlistId/tracks", (req: Request, res: Response) => {
  const playlistIdToAdd = req.params.playlistId;
  const userIdToAdd = req.headers.authorization;
  const { name, artist, url } = req.body;

  if (!playlistIdToAdd || !userIdToAdd || !name || !artist || !url) {
    res
      .status(400)
      .send(
        "Nome da playlist ou Usuário ou Artista ou Endereço não encontrado!"
      );
  }

  const userSelectedById = users.find((user) => {
    return user.id === userIdToAdd;
  });

  let playlistSelected;

  if (userSelectedById) {
    playlistSelected = userSelectedById.playlists.find((playlist) => {
        return playlist.id === playlistIdToAdd
    });
  } else {
    res
      .status(400)
      .send(
        "Usuário não encontrado!"
      );
  }

  if(playlistSelected){
    playlistSelected.tracks.push({
        id: Date.now().toString(),
        name: name,
        artist: artist,
        url: url
    })
  }

  res.status(200).send(playlistSelected);
});

// -------------------PORTA PARA VERIFICAR O SERVIDOR-------------

app.listen(3003, () => {
  console.log("Servidor executando na porta 3003");
});
