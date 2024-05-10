

let Question40 = () => {

    let make_album = (name: string, artist :string, track? :number) =>{
        interface Album {
            name: string;
            artist: string;
            track?: number;
        }

        if (track){
            let album: Album = {
                name: name,
                artist: artist,
                track: track
            }
            return album
        }
        else{
            let album: Album = {
                name: name,
                artist: artist
            }
            return album
        }

       


    }

    let album1 = make_album("Dil", "NFAK");
    let album2 = make_album("Dil", "NFAK", 10);
    console.log(album1);
    console.log(album2);


    

};

Question40();