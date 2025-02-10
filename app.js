const APIController = (function() {
    
    const clientId = 'f49615640d8141059a8a3ea407e6139a';
    const clientSecret = '3cdea1fdfaaa493fa3d99beca9380d66';

    // private methods
    const _getToken = async () => {

        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa( clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    }


    /*----------------------------------------------------------------------*/

     