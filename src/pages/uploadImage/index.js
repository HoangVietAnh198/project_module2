import "./style.css";

export let uploadImage = /*html*/ `<div class="container-upload">
<div class="upload-top">
    <form>
        <img src="https://cdn.pixabay.com/photo/2017/01/17/14/44/pixabay-1987090_1280.png" alt="photo" class="logo">
        <input type="text" class="search" placeholder="Search Images" name="saerch" id="searchUpload">
    </form>
    <div class="upload-rigth">
        <span>Explore</span>
        <i class="fa-solid fa-chevron-down"></i>
        <i class="fa-solid fa-bell"></i>
        <i class="fa-sharp fa-solid fa-circle-user"></i>
        <button class="button-upload" id="buttonUpload">
            <i class="fa-solid fa-arrow-up-from-bracket"></i>Upload</button>
    </div>
</div>
<div class="container-buttom">
    <div class="toolbar-top">
        <span class="toolbar-letter">My media</span>
        <span class="toolbar-letter">Upload</span>
        <span class="toolbar-letter">Statistics</span>
        <span class="toolbar-letter">Collections</span>
        <span class="toolbar-letter">Following</span>
        <span class="toolbar-letter">Messages</span>
        <span class="toolbar-letter">Settings</span>
        <span class="toolbar-letter-one">My profile</span>
    </div>
    <div class="toolbar-buttum">
        <div class="centent-left">
            <div class="centent-left-one">
                <h2 class="title-upload">Supported file types</h2>
                <h3 class="title-upload">Photos/Vectors</h3>
                <p>JPG, PNG, PSD, AI, and SVG images up to 40 MB with
                    <br>at least 3000 pixels along one side.
                    <span class="chu5">
                        Image Quality</span>
                    <br>Guidelines...</p>
            </div>
            <div class="centent-left-one">
                <h3 class="title-upload">Videos</h3>
                <p>MPEG, MOV, and AVI videos up to 300 MB and a
                    <br>minimum resolution of 1920x800 pixels. Clips
                                                should
                    <br>
                    no longer than 60 seconds.
                    <span class="chu5">Video Quality<br>
                        Guidelines....
                    </span>
                </p>
            </div>
            <div class="centent-left-one">
                <h3 class="title-upload">Music</h3>
                <p>MP3, WAV, AAC,FLAC, AIF and M4A music up to<br>100MB file size limit. Duration should be no
                                                longer
                    <br>than 15 minutes.<span class="chu5">
                        Music Quality Guidelines....
                    </span>
                </p>
            </div>
        </div>
        <div class="centent-right">
            <div class="container"></div>
            <h1>up load image</h1>
            <form id="login-form">
                <div class="box-login">
                    <p>downloads</p>
                    <input type="number" placeholder="Please enter downloads" class="input" name="downloads">
                    <div class="error" id="error-dowloads"></div>
                    <p>id</p>
                    <input type="number" placeholder="Please enter id" class="input" name="id">
                    <div class="error" id="error-id"></div>
                    <p>largeImageURL</p>
                    <input type="text" placeholder="Please enter largeImageURL" class="input" name="largeImageURL">
                    <div class="error" id="error-largeImageURL"></div>
                    <p>likes</p>
                    <input type="number" placeholder="Please enter likes" class="input" name="likes">
                    <div class="error" id="error-likes"></div>
                    <p>user</p>
                    <input type="text" placeholder="Confirm your name user" class="input" name="user">
                    <div class="error" id="error-user"></div>
                    <p>pageURL</p>
                    <input type="text" placeholder="Confirm your pageURL" class="input" name="pageURL">
                    <div class="error" id="error-pageURL"></div>
                    <p>previewURL</p>
                    <input type="text" placeholder="Confirm your previewURL" class="input" name="previewURL">
                    <div class="error" id="error-previewURL"></div>
                    <button class="btn-login">upload</button>
                </form>

            </div>
            <h1 class="chu0">Media in high demand</h1>
            <div class="centent-right-two">
                <i class="fa-solid fa-chart-column"></i>
                <span>Trending topics</span>
                <p>See which Pixabay topics are trending and play our keyword bingo !</p>
                <button id="viewTopics">View topics</button>
            </div>
            <h3 class="chu0">Images</h3>
            <div class="button-categor">
                <button id="button-category-nut">queen elizabeth</button>
                <button id="button-category-nut">Sky video</button>
                <button id="button-category-nut">durga</button>
                <button id="button-category-nut">indian flag</button>
                <button id="button-category-nut">mid-autumn festival</button>
                <button id="button-category-nut">naruto</button>
                <button id="button-category-nut">navratri</button>
                <button id="button-category-nut">durga puja</button>
                <button id="button-category-nut">motivational quotes</button>
                <button id="button-category-nut">onam</button>
                <button id="button-category-nut">india map</button>
                <button id="button-category-nut">elon musk</button>
                <button id="button-category-nut">ronaldo</button>
                <button id="button-category-nut">hanuman</button>
                <button id="button-category-nut">spiderman</button>
                <button id="button-category-nut">thumbnail</button>
                <button id="button-category-nut">moon festival</button>
                <button id="button-category-nut">youtube background</button>
                <button id="button-category-nut">bts</button>
                <p class="chu1">Show more</p>
            </div>
            <h3 class="chu0">Videos</h3>
            <div class="button-categor-two">
                <button id="button-category-nut">snake</button>
                <button id="button-category-nut">dubai</button>
                <button id="button-category-nut">cricket</button>
                <button id="button-category-nut">cats funny</button>
                <button id="button-category-nut">sky video</button>
                <button id="button-category-nut">naruto</button>
                <button id="button-category-nut">facts</button>
                <button id="button-category-nut">thinking man</button>
                <button id="button-category-nut">cheetah</button>
                <button id="button-category-nut">scientist</button>
                <button id="button-category-nut">angry</button>
                <button id="button-category-nut">hord word</button>
                <button id="button-category-nut">funny cat</button>
                <button id="button-category-nut">crying</button>
                <button id="button-category-nut">teacher</button>
                <button id="button-category-nut">indian flag</button>
                <button id="button-category-nut">subscribr video</button>
                <button id="button-category-nut">relaxing smooth</button>
                <button id="button-category-nut">question</button>
                <p class="chu1">Show more</p>
            </div>
        </div>
    </div>
    <div class="lastLetter-one">
        <span class="lastLetter">This site is protected by reCAPTCHA and the Google
            <span class="characters">
                Privacy Policy</span>
            and
            <span class="characters">Terms of Service</span>
            apply .</span>
    </div>
</div>
<div class="bottom-bar-tool">
    <i class="fa-solid fa-earth-americas"></i>
    <span>
        Choose your language:</span>
    <span>
        English Việt</span>
</div>

</div>`;
