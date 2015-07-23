# Mission Control

A web based application which allows users to control a series of ChromeCasts via a web interface. Channels which are broadcasted to each device are created by users via YouTube playlists.

The application must be run on the same network as all ChromeCasts.



## The Receiver
Even though the receiver uses multiple video players (and might support additional content types), it uses the YouTube event naming conventions. The receiver produces the folowing events: `UNSTARTED, ENDED, PLAYING, PAUSED, BUFFERING, CUED`



## Environment Variables
* `DB_CONNECT=mongodb://user:password@location:port/db_name` - A mongo database URL
* `CRYPTO_KEY` - just some string or whatever you want
* `VIMEO_CLIENT_ID` - vimeo client id
* `VIMEO_SECRET` - vimeo API Secret
* `VIMEO_AUTH_CALLBACK` - A publicly available URL which vimeo calls upon authentication
