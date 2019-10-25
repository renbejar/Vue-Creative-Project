/* global axios*/
let app = new Vue({
  el: '#app',
  data: {
      rover: 'curiosity',
      camera: '',
      mast: true,
      chemcam: true,
      mahli: true,
      mardi: true,
      pancam: false,
      minites: false,
      current: {
      img_src: '',
      alt: ''
    },
  },
  methods: {
      async nasa()
      {
          try {
        const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/' + this.rover + '/photos?sol=50&camera=' + this.camera + '&api_key=q8yA0KaDG6g5MaX8QCcCgedZAmdz0s2AhlwwCXdb');
      console.log(response.data.photos[0].img_src);
      this.current.img_src = response.data.photos[0].img_src;
        
    } catch (error) {
    
        console.log(error);
    }
      },
   curiousity() {
      this.rover = 'curiosity';
      this.mast = true;
      this.chemcam = true;
      this.mahli = true;
      this.mardi = true;
      this.pancam = false;
      this.minites = false;
  },
  opportunity() {
       console.log("here");
       this.rover = 'opportunity';
      this.mast = false;
      this.chemcam = false;
      this.mahli = false;
      this.mardi = true;
      this.pancam = true;
      this.minites = true;
  },
  spirit() {
       console.log("here");
       this.rover = 'spirit';
      this.mast = false;
      this.chemcam = false;
      this.mahli = false;
      this.mardi = true;
      this.pancam = true;
      this.minites = true;
  },
  Fhaz(){
    this.camera = 'FHAZ';  
  },
  Rhaz(){
    this.camera = 'RHAZ';  
  },
  Mast(){
    this.camera = 'MAST';  
  },
  Chemcam(){
    this.camera = 'CHEMCAM';  
  },
  Mahli(){
    this.camera = 'MAHLI';  
  },
  Mardi(){
    this.camera = 'MARDI';  
  },
  Navcam(){
    this.camera = 'NAVCAM';  
  },
  Pancam(){
    this.camera = 'PANCAM';  
  },
  Minites(){
    this.camera = 'MINITES';  
  },
  },
  watch: {
      camera() {
       this.nasa();
      } 
  }
})
