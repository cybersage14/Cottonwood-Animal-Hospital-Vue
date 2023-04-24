<template>
    <section class="veterinarians">
      <h2>Veterinarians</h2>
      <div class="container">
        <div class="veterinarians-container">
          <div v-for="(vet, index) in veterinarians" :key="index" class="vet-card">
            <img :src="vet.image" alt="Veterinarian photo" class="vet-photo">
            <h3>{{ vet.name }}</h3>
            <p>{{ vet.description }}</p>
            <p>{{ vet.interests }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
<script>
export default {
name: "VeterinariansSection",
data() {
    return {
        veterinarians: [
            {
                name: "Claudia Horvath, DVM",
                image: require("@/assets/img/Claudia.jpg"),
                description:
                    "As a child, Dr. Horvath was always drawn to animals and hoped to one day have a career caring for them. In college, she completed an undergraduate degree in medical technology. This allowed her to work part-time in human hospitals while attending veterinary school at UCDavis. After graduating from UCDavis, she relocated to Southern California where she worked at several local clinics and gained invaluable skills and experience. Dr. Horvath bought a small veterinary practice in Los Alamitos and worked at the clinic for many years before selling it. Her love of veterinary medicine kept her in the field part-time. The opportunity to open a new hospital at her original location presented itself, and she has opened Little Cottonwood Animal Hospital. Dr. Horvath is excited to be practicing in Los Alamitos again and is looking forward to welcoming clients and their pets to the hospital.",
                interests: 
                "When not practicing, she enjoys traveling, cycling, hiking, and gardening.",
            },
            {
                name: "Brigitte Licciardo, DVM",
                image: require("@/assets/img/Brigitte.jpg"),
                description:
                    "Dr. Licciardo, a Southern California native, found her passion for veterinary medicine early in her college career while serving as a veterinary assistant. During this time, she quickly realized small animal medicine was her calling. Having first graduated from the University of California, Irvine with a Bachelor’s in Biology, she then went on to attain her veterinary degree from St. Matthew’s University College of Veterinary Medicine. Dr. Licciardo gained invaluable experience working in several small animal hospitals throughout Orange County. She finds all areas of veterinary medicine rewarding and has a special interest in surgery and preventative care.",
                interests:
                    "In her free time, Dr. Licciardo enjoys the outdoors with her partner, Ian, and their two dogs, Benjamin and Wick. She also enjoys cooking, running, yoga, and is an aspiring dart enthusiast.",
            },
            {
                name: "Lauren Oliver, DVM",
                image: require("@/assets/img/Dianna.jpg"),
                description:
                "Dr. Oliver discovered her love for animals early in life. Raised in the Silver Lake district of Los Angeles, she not only reveled in caring for her family's dogs and cats but her neighbors' chickens and ducks. She became interested in biology while at Immaculate Heart High School in Hollywood and later completed her Bachelor's at Pomona College in Claremont. By working summers as a veterinary assistant, she found her career path. After getting her DVM at UCDavis in 1993, she worked in several practices in Orange County before joining Dr. Horvath's team in 1998. She is happy to work with Drs. Horvath and Licciardo once more.",
                interests:
                "In her free time, Dr. Oliver enjoys gardening, kayaking, sailing, musical theater, and genealogy. A 5th generation Long Beach resident, she shares her El Dorado park home with her four cats.",
            },

        ],
    };
},
};
</script>
  
  <style scoped>
  /* Add your CSS styles for the Veterinarians component here */
  .veterinarians {
  padding: 2rem 0;
}

.veterinarians-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.5rem;
}

.vet-card {
  flex: 1;
  max-width: calc(33.333% - 1.5rem);
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.vet-photo {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 1rem;
}




@media screen and (max-width: 1024px) {
  .vet-card {
    max-width: calc(50% - 1.5rem);
  }
}

@media screen and (max-width: 768px) {
  .vet-card {
    max-width: 100%;
  }
}
  </style>
  