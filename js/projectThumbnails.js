// Dictionary of all projects with properties for thumbnails
const projects = {
    masterthesis: {
      title: 'Functionally graded toolpaths',
      projectPage: 'masterthesis.html',
      categories: ['category_1'],
      thumbnail: 'images/Julius_Uberall_project_thumbnails_masterthesis_discretized_functionally_graded_differential_grown_toolpaths.jpg',
    },
    uberallFont: {
        title: 'Uberall Typography',
        projectPage: 'uberallFont.html',
        categories: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_uberallfont.jpg',
    },
    meshgrowth: {
        title: 'Mesh Growth',
        projectPage: 'meshgrowth.html',
        categories: ['category_1'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_meshgrowth.jpg',
    },
    curvegrowth: {
        title: 'Curve Growth',
        projectPage: 'curvegrowth.html',
        categories: ['category_1'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_curvegrowth.jpg',
    },
    digitaltwins: {
        title: 'Digital Twins',
        projectPage: 'digitaltwins.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_3Dscan_LIDAR.jpg',
    },
    parametricroof: {
        title: 'Parametric Roof',
        projectPage: 'parametricroof.html',
        categories: ['category_1'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_morphogeneticprogramming.jpg',
    },
    dwellingConfiguratorApp: {
        title: 'Dwelling Configurator App',
        projectPage: 'dwellingConfiguratorApp.html',
        categories: ['category_1'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_dwellingConfigurator.jpg',
    },
    nft: {
        title: 'NFT',
        projectPage: 'nft.html',
        categories: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_nft.jpg',
    },
    adventitia: {
        title: 'Adventitia',
        projectPage: 'adventitia.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_Bartlett_Workshop.jpg',
    },
    spacefashion: {
        title: 'Space Fashion',
        projectPage: 'spacefashion.html',
        categories: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_spacefashion.jpg',
    },
    fluffygrass: {
        title: 'Fluffy Grass',
        projectPage: 'fluffygrass.html',
        categories: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_HairSystem.jpg',
    },
    artifacts: {
        title: 'Artifacts',
        projectPage: 'artifacts.html',
        categories: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_Artifact.jpg',
    },
    b211: {
        title: 'B211 Project',
        projectPage: 'b211.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_bonnerstrasse211.jpg',
    },
    b211thesis : {
        title: 'B211 Thesis',
        projectPage: 'b211_thesis.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_bonnerstrasse211_thesis.jpg',
    },
    habitatb: {
        title: 'Habitat B',
        projectPage: 'habitatb.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_HabitatB.jpg',
    },
    reuse: {
        title: 'Reuse',
        projectPage: 'reuse.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_reuse.jpg',
    },
    curvedcrease: {
        title: 'Curved Crease',
        projectPage: 'curvedcrease.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_curvedcrease.jpg',
    },
    miescheid: {
        title: 'House R',
        projectPage: 'miescheid.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_miescheid.jpg',
    },
    heimatsiedlung: {
        title: 'Heimatsiedlung',
        projectPage: 'heimatsiedlung.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_heimatsiedlung.jpg',
    },
    fredericksburg: {
        title: 'Fredericksburg',
        projectPage: 'fredericksburg.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_fredericksburg.jpg',
    },
    vtrobotics: {
        title: 'VT Robotics',
        projectPage: 'vtrobotics.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_VirginiaTech_robotics.jpg',
    },
    yu: {
        title: 'YŪ',
        projectPage: 'yu.html',
        categories: ['category_1'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_YU.jpg',
    },
    evolo: {
        title: 'Evolo 2019',
        projectPage: 'evolo.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_evolo.jpg',
    },
    lichtplanung: {
        title: 'Lighting Design',
        projectPage: 'lichtplanung.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_lichtplanung.jpg',
    },
    atom: {
        title: 'Atom Stool',
        projectPage: 'atom.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_atomStool.jpg',
    },
    linearwoods: {
        title: 'Linear Woods',
        projectPage: 'linearwoods.html',
        categories: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_linearWoods.jpg',
    },
    woodboxes: {
        title: 'Wood Box City',
        projectPage: 'woodboxes.html',
        categories: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_woodBoxCity.jpg',
    },
     hexagon: {
        title: 'Hexagon',
        projectPage: 'hexagon.html',
        categories: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_hexagon.jpg',
    },
    eiffeltower: {
        title: 'Eiffel tower 3D model',
        projectPage: 'eiffeltower.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_eiffeltower.jpg',
    },
    monchengladbach: {
        title: 'Mönchengladbach',
        projectPage: 'monchengladbach.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_monchengladbach.jpg',
    },
    facades: {
        title: 'Facades',
        projectPage: 'facades.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_facades.jpg',
    },
    milkconcrete: {
        title: 'Milk Concrete',
        projectPage: 'milkconcrete.html',
        categories: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_milkconcrete.jpg',
    },
    hollowbodies: {
        title: 'Hollow Bodies',
        projectPage: 'hollowbodies.html',
        categories: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_hollowbodies.jpg',
    },
    boxes: {
        title: 'Boxes',
        projectPage: 'boxes.html',
        categories: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_paperThree.jpg',
    },
    constructionstair: {
        title: 'Stair',
        projectPage: 'constructionstair.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_constructionstairs.jpg',
    },
    tonhsd: {
        title: 'Ton',
        projectPage: 'ton_hsd.html',
        categories: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_ton.jpg',
    },
    hubsweden: {
        title: 'Rural Hub Sweden',
        projectPage: 'hubsweden.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_ruralhubsweden.svg',
    },
    papertwo: {
        title: 'Paper #2',
        projectPage: 'papertwo.html',
        categories: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_paperTwo.jpg',
    },
    paperone: {
        title: 'Paper #1',
        projectPage: 'paperone.html',
        categories: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_paperOne.jpg',
    },
    neandertal: {
        title: 'Neandertal',
        projectPage: 'neandertal.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_neandertal.svg',
    },
    amazonezupferde: {
        title: 'Amazone zu Pferde',
        projectPage: 'amazonezupferde.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_amazonezupferde.jpg',
    },
    claynewspaper: {
        title: 'Clay Newspaper',
        projectPage: 'claynewspaper.html',
        categories: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_clayNewspaper.jpg',
    },
    basement3d: {
        title: '3D Basement',
        projectPage: '3Dbasement.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_3Dbasement.jpg',
    },
    architecturesketches: {
        title: 'Architecture Sketches',
        projectPage: 'architecturesketches.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_architecturesketches.jpg',
    },
    wirecomputer: {
        title: 'Wire Computer',
        projectPage: 'wirecomputer.html',
        categories: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_wireComputer.jpg',
    },
    brickgarden: {
        title: 'Brick Garden',
        projectPage: 'brickgarden.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_brickgarden.jpg',
    },
    monastery: {
        title: 'Monastery',
        projectPage: 'monastery.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_Monastery.jpg',
    },
    boxedperson: {
        title: 'Boxed Person',
        projectPage: 'boxedperson.html',
        categories: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_boxedPerson.jpg',
    },
    firefly: {
        title: 'Firefly',
        projectPage: 'firefly.html',
        categories: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_intraMuros_2018.jpg',
    },
    substract: {
        title: 'Substract',
        projectPage: 'substract.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_substract.svg',
    },
    slatdance: {
        title: 'Slatdance',
        projectPage: 'slatdance.html',
        categories: ['category_3'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_slatdance.jpg',
    },
    villapile: {
        title: 'Villa Pile',
        projectPage: 'villapile.html',
        categories: ['category_2'],
        thumbnail: 'images/Julius_Uberall_project_thumbnails_villapile.jpg',
      },
};

//Create thumbnails
document.getElementsByClassName
const aTags = document.querySelectorAll('a[project-thumbnail]');
aTags.forEach(selectedA => {
  const projectThumbnailData = selectedA.getAttribute('project-thumbnail');
  projects[projectThumbnailData]['categories'].forEach(category =>{
    selectedA.classList.add(category);
  });
  selectedA.href = projects[projectThumbnailData]['projectPage'];
  const newDiv = document.createElement('div');
  newDiv.classList.add('grid_cell');
  newDiv.innerHTML = 
    `<img src="${projects[projectThumbnailData]['thumbnail']}">
    <div class="cell_hover">
      <div class="cell_title">${projects[projectThumbnailData]['title']}</div>
    </div> `;
  selectedA.appendChild(newDiv);
});