// Dictionary of all projects with properties for thumbnails
const projects = {
    masterthesis: {
        title: 'Graded toolpaths',
        projectPage: 'masterthesis.html',
        projectcategory: ['category_1'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_masterthesis_discretized_functionally_graded_differential_grown_toolpaths.jpg',
        year: '2022',
      },
    neuralTextureSynthesis: {
    title: 'Neural Texture Synthesis',
    projectPage: 'neuralTextureSynthesis.html',
    projectcategory: ['category_1'],
    thumbnail: 'images/Julius_Uberall_project_thumbnails_neuralTextureSynthesis.jpg',
    thumbnailvideo: 'videos/JuliusUberall_thumbnail_neuralTextureSynthesis.mp4',
    year: '2024',
    quicklinks: {
        'original paper': 'https://www.cs.toronto.edu/~bonner/courses/2022s/csc2547/papers/discriminative/image-transformation/texture-synthesis,-gatys,-nips-2015.pdf',
        },
    },
    poissonImageEditing: {
      title: 'Poisson Image Editing',
      projectPage: 'poissonImageEditing.html',
      projectcategory: ['category_1'],
      thumbnail: 'images/Julius_Uberall_project_thumbnails_poissonImageEditing.jpg',
      thumbnailvideo: 'videos/JuliusUberall_thumbnail_poissonImageEditing.mp4',
      year: '2024',
      quicklinks: {
        'original paper': 'https://www.cs.jhu.edu/~misha/Fall07/Papers/Perez03.pdf',
        },
    },
    uberallFont: {
        title: 'Uberall Typography',
        projectPage: 'uberallFont.html',
        projectcategory: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_uberallfont.jpg',
        year: '2022',
    },
    meshgrowth: {
        title: 'Mesh Growth',
        projectPage: 'meshgrowth.html',
        projectcategory: ['category_1'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_meshgrowth.jpg',
        thumbnailvideo: 'videos/JuliusUberall_thumbnail_meshgrowth.mp4',
        year: '2022',
    },
    curvegrowth: {
        title: 'Curve Growth',
        projectPage: 'curvegrowth.html',
        projectcategory: ['category_1'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_curvegrowth.jpg',
        year: '2022',
    },
    digitaltwins: {
        title: 'Digital Twins',
        projectPage: 'digitaltwins.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_3Dscan_LIDAR.jpg',
        year: '2022',
    },
    parametricroof: {
        title: 'Parametric Roof',
        projectPage: 'parametricroof.html',
        projectcategory: ['category_1'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_morphogeneticprogramming.jpg',
        year: '2021/22',
    },
    dwellingConfiguratorApp: {
        title: 'Dwelling App',
        projectPage: 'dwellingConfiguratorApp.html',
        projectcategory: ['category_1'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_dwellingConfigurator.jpg',
        year: '2022',
    },
    nft: {
        title: 'NFT',
        projectPage: 'nft.html',
        projectcategory: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_nft.jpg',
        year: '2021',
    },
    adventitia: {
        title: 'Adventitia',
        projectPage: 'adventitia.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_Bartlett_Workshop.jpg',
        year: '2021',
    },
    spacefashion: {
        title: 'Space Fashion',
        projectPage: 'spacefashion.html',
        projectcategory: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_spacefashion.jpg',
    },
    fluffygrass: {
        title: 'Fluffy Grass',
        projectPage: 'fluffygrass.html',
        projectcategory: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_HairSystem.jpg',
        year: '2021',
    },
    artifacts: {
        title: 'Artifacts',
        projectPage: 'artifacts.html',
        projectcategory: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_Artifact.jpg',
        year: '2021',
    },
    b211: {
        title: 'B211 Project',
        projectPage: 'b211.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_bonnerstrasse211.jpg',
        year: '2021',
    },
    b211thesis : {
        title: 'B211 Thesis',
        projectPage: 'b211_thesis.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_bonnerstrasse211_thesis.jpg',
        year: '2021',
    },
    habitatb: {
        title: 'Habitat B',
        projectPage: 'habitatb.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_HabitatB.jpg',
        year: '2020/21',
    },
    reuse: {
        title: 'Reuse',
        projectPage: 'reuse.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_reuse.jpg',
        year: '2020/21',
    },
    curvedcrease: {
        title: 'Curved Crease',
        projectPage: 'curvedcrease.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_curvedcrease.jpg',
        year: '2020',
    },
    miescheid: {
        title: 'House R',
        projectPage: 'miescheid.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_miescheid.jpg',
        year: '2020',
    },
    heimatsiedlung: {
        title: 'Heimatsiedlung',
        projectPage: 'heimatsiedlung.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_heimatsiedlung.jpg',
        year: '2020',
    },
    fredericksburg: {
        title: 'Fredericksburg',
        projectPage: 'fredericksburg.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_fredericksburg.jpg',
        year: '2019',
    },
    vtrobotics: {
        title: 'VT Robotics',
        projectPage: 'vtrobotics.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_VirginiaTech_robotics.jpg',
        year: '2019',
    },
    yu: {
        title: 'YŪ',
        projectPage: 'yu.html',
        projectcategory: ['category_1'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_YU.jpg',
        year: '2018-22',
    },
    evolo: {
        title: 'Evolo 2019',
        projectPage: 'evolo.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_evolo.jpg',
        year: '2019',
    },
    lichtplanung: {
        title: 'Lighting Design',
        projectPage: 'lichtplanung.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_lichtplanung.jpg',
        year: '2018/19',
    },
    atom: {
        title: 'Atom Stool',
        projectPage: 'atom.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_atomStool.jpg',
        year: '2018/19',
    },
    linearwoods: {
        title: 'Linear Woods',
        projectPage: 'linearwoods.html',
        projectcategory: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_linearWoods.jpg',
        year: '2018',
    },
    woodboxes: {
        title: 'Wood Boxes',
        projectPage: 'woodboxes.html',
        projectcategory: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_woodBoxCity.jpg',
        year: '2018',
    },
     hexagon: {
        title: 'Hexagon',
        projectPage: 'hexagon.html',
        projectcategory: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_hexagon.jpg',
        year: '2018',
    },
    eiffeltower: {
        title: 'Eiffel 3D',
        projectPage: 'eiffeltower.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_eiffeltower.jpg',
        year: '2018',
    },
    monchengladbach: {
        title: 'Mönchengladbach',
        projectPage: 'monchengladbach.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_monchengladbach.jpg',
        year: '2018',
    },
    facades: {
        title: 'Facades',
        projectPage: 'facades.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_facades.jpg',
        year: '2018',
    },
    milkconcrete: {
        title: 'Milk Concrete',
        projectPage: 'milkconcrete.html',
        projectcategory: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_milkconcrete.jpg',
        year: '2018',
    },
    hollowbodies: {
        title: 'Hollow Bodies',
        projectPage: 'hollowbodies.html',
        projectcategory: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_hollowbodies.jpg',
        year: '2018',
    },
    boxes: {
        title: 'Boxes',
        projectPage: 'boxes.html',
        projectcategory: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_paperThree.jpg',
        year: '2018',
    },
    constructionstair: {
        title: 'Stair',
        projectPage: 'constructionstair.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_constructionstairs.jpg',
        year: '2018',
    },
    tonhsd: {
        title: 'Ton',
        projectPage: 'ton_hsd.html',
        projectcategory: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_ton.jpg',
        year: '2018',
    },
    hubsweden: {
        title: 'Rural Hub Sweden',
        projectPage: 'hubsweden.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_ruralhubsweden.svg',
        year: '2018',
    },
    papertwo: {
        title: 'Paper #2',
        projectPage: 'papertwo.html',
        projectcategory: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_paperTwo.jpg',
        year: '2018',
    },
    paperone: {
        title: 'Paper #1',
        projectPage: 'paperone.html',
        projectcategory: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_paperOne.jpg',
        year: '2018',
    },
    neandertal: {
        title: 'Neandertal',
        projectPage: 'neandertal.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_neandertal.svg',
        year: '2017/18',
    },
    amazonezupferde: {
        title: 'Amazone zu Pferde',
        projectPage: 'amazonezupferde.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_amazonezupferde.jpg',
        year: '2017',
    },
    claynewspaper: {
        title: 'Clay Newspaper',
        projectPage: 'claynewspaper.html',
        projectcategory: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_clayNewspaper.jpg',
        year: '2017',
    },
    basement3d: {
        title: '3D Basement',
        projectPage: '3Dbasement.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_3Dbasement.jpg',
        year: '2017/18',
    },
    architecturesketches: {
        title: 'Architecture Sketches',
        projectPage: 'architecturesketches.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_architecturesketches.jpg',
        year: '2017/18',
    },
    wirecomputer: {
        title: 'Wire Computer',
        projectPage: 'wirecomputer.html',
        projectcategory: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_wireComputer.jpg',
        year: '2017',
    },
    brickgarden: {
        title: 'Brick Garden',
        projectPage: 'brickgarden.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_brickgarden.jpg',
        year: '2017/18',
    },
    monastery: {
        title: 'Monastery',
        projectPage: 'monastery.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_Monastery.jpg',
        year: '2017',
    },
    boxedperson: {
        title: 'Boxed Person',
        projectPage: 'boxedperson.html',
        projectcategory: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_boxedPerson.jpg',
        year: '2017',
    },
    firefly: {
        title: 'Firefly',
        projectPage: 'firefly.html',
        projectcategory: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_intraMuros_2018.jpg',
        year: '2017',
    },
    substract: {
        title: 'Substract',
        projectPage: 'substract.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_substract.svg',
        year: '2017',
    },
    slatdance: {
        title: 'Slatdance',
        projectPage: 'slatdance.html',
        projectcategory: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_slatdance.jpg',
        year: '2017',
    },
    villapile: {
        title: 'Villa Pile',
        projectPage: 'villapile.html',
        projectcategory: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_villapile.jpg',
        year: '2017',
      },
};

// Dictionary of all news
const news = {
    n2409_03: {
        date: "Sep '24", 
        icon: '🎓',
        text: 'Starting another master. Doing a MSc in Computer Graphics, Vision and Imaging at UCL.',
    },
    n2409_02: {
        date: "Sep '24",
        icon: '⛰️',
        text: 'Went for an awesome hiking trip to Trolltunga in Norway.',
    },
    n2409_01: {
        date: "Sep '24",
        icon: '💼',
        text: 'Left the Applied R+D team at Foster + Partners after 2 exciting years.',
    },
};

//Create thumbnails
const aTags = document.querySelectorAll('a[project-name]');
aTags.forEach(selectedA => {
  const projectData = selectedA.getAttribute('project-name');
  projects[projectData]['projectcategory'].forEach(category =>{
    selectedA.setAttribute('project-category', category);
  });
  selectedA.href = projects[projectData]['projectPage'];
  const newDiv = document.createElement('div');
  newDiv.classList.add('project-cell');
  newDiv.innerHTML = 
    `<img src="${projects[projectData]['thumbnail']}">
    <div class="project-metadata">
        <div>${projects[projectData]['year']}</div>
        <div class="project_title" >${projects[projectData]['title']}</div>
    </div> `;
  if ('thumbnailvideo' in projects[projectData]){
    newDiv.innerHTML = 
        `<video width=100% height="100%" autoplay loop muted style="display: none;">
            <source src="${projects[projectData]['thumbnailvideo']}" type="video/mp4">
        </video>` 
        + newDiv.innerHTML;
  }
  selectedA.appendChild(newDiv);
});

//Create news feed
const newsWrapper = document.getElementById('news_wrapper');
if(newsWrapper != null){
    Object.entries(news).forEach(([key, value]) => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = 
            `<div class="news">
                <div class="n_icon">${value.icon}</div>
                <div class="n_date">${value.date}</div>
                <div class="n_text">${value.text}</div>
            </div>`
        newsWrapper.appendChild(newDiv);
    });
}

//Insert loading icon
function insertLoadingIcon() {
    const loadingIconWrapper = document.createElement('div');
    loadingIconWrapper.id = 'loading-icon-wrapper';
    const loadingIcon = document.createElement('div');
    loadingIcon.className = 'loading-icon';
    loadingIconWrapper.appendChild(loadingIcon);
    document.body.insertBefore(loadingIconWrapper, document.body.firstChild);
}

//To execute
insertLoadingIcon();

// Switches between thumbnail video and thumbnail image on mouse hover and mouse out when screen horizontal
if (!window.matchMedia("(orientation: portrait)").matches){
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.project-cell').forEach(function(cell) {
            if('thumbnailvideo' in projects[cell.parentElement.getAttribute('project-name')]){
                cell.addEventListener('mouseover', function() {
                    cell.querySelector('video').style.display = 'block';
                    cell.querySelector('img').style.display = 'none';
                });
                cell.addEventListener('mouseout', function() {
                    cell.querySelector('video').style.display = 'none';
                    cell.querySelector('img').style.display = 'block';
                });
            }
        });
    });
}

//Create quicklinks on research page
const q = document.getElementById('quicklinks');
const projectName = q.getAttribute('project-name');
Object.entries(projects[projectName]['quicklinks']).forEach(([key, value]) => {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = 
        `<a href="${value}" target="_blank">
            ${key} 
            <ion-icon name="chevron-forward-outline"></ion-icon>
        </a>`
    q.appendChild(newDiv);
});