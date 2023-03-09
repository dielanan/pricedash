/**
* Template Name: Arsha - v4.10.0
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
	
  }
  
  
  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate  glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });
  
  
})();

  /**
   * new additional
   */
   
function updateIframes() {
	const select = document.getElementById("mySelect");
	const iframe1 = document.getElementById("iframe1");
	const iframe2 = document.getElementById("iframe2");
	const iframe3 = document.getElementById("iframe3");
	const iframe4 = document.getElementById("iframe4");
	const iframe5 = document.getElementById("iframe5");
	const iframe6 = document.getElementById("iframe6");
	const iframe7 = document.getElementById("iframe7");
	const iframe8 = document.getElementById("iframe8");
	const iframe9 = document.getElementById("iframe9");
	const iframe10 = document.getElementById("iframe10");
	const iframe11 = document.getElementById("iframe11");
	const iframe12 = document.getElementById("iframe12");
	const iframe13 = document.getElementById("iframe13");

	const selectedValue = select.value;
	const url1 = 'charts/ihp/' + selectedValue + '.html';
	const url2 = 'charts/ihp/' + selectedValue + '_food_beverage.html';
	const url3 = 'charts/ihp/' + selectedValue + '_alcohol_tobacco.html';
	const url4 = 'charts/ihp/' + selectedValue + '_clothing_footwear.html';
	const url5 = 'charts/ihp/' + selectedValue + '_housing_utilities.html';
	const url6 = 'charts/ihp/' + selectedValue + '_furnishings.html';
	const url7 = 'charts/ihp/' + selectedValue + '_health.html';
	const url8 = 'charts/ihp/' + selectedValue + '_transport.html';
	const url9 = 'charts/ihp/' + selectedValue + '_communication.html';
	const url10 = 'charts/ihp/' + selectedValue + '_recreation_culture.html';
	const url11 = 'charts/ihp/' + selectedValue + '_education.html';
	const url12 = 'charts/ihp/' + selectedValue + '_hospitality.html';
	const url13 = 'charts/ihp/' + selectedValue + '_misc.html';

	iframe1.src = url1;
	iframe2.src = url2;
	iframe3.src = url3;
	iframe4.src = url4;
	iframe5.src = url5;
	iframe6.src = url6;
	iframe7.src = url7;
	iframe8.src = url8;
	iframe9.src = url9;
	iframe10.src = url10;
	iframe11.src = url11;
	iframe12.src = url12;
	iframe13.src = url12;
		}
	document.addEventListener("DOMContentLoaded", () => {
		updateIframes();

	const select = document.getElementById("mySelect");
		select.addEventListener("change", updateIframes);
		});

		
////////////

// Add an event listener to the data zoom filter for the chart in iframe1
var chart1 = document.getElementById("iframe1").contentWindow.echarts.getInstance();
chart1.on("datazoom", function(params) {
    // Retrieve the new zoom range
    var newZoomRange = params.batch[0].start;
    // Use the Pyecharts API to set the same zoom range for the data zoom filter of the charts in the other iframes
    var chart2 = document.getElementById("iframe2").contentWindow.echarts.getInstance();
    chart2.dispatchAction({
        type: 'dataZoom',
        batch: [{
            start: newZoomRange
        }]
    });
    var chart3 = document.getElementById("iframe3").contentWindow.echarts.getInstance();
    chart3.dispatchAction({
        type: 'dataZoom',
        batch: [{
            start: newZoomRange
        }]
    });
    var chart4 = document.getElementById("iframe4").contentWindow.echarts.getInstance();
    chart4.dispatchAction({
        type: 'dataZoom',
        batch: [{
            start: newZoomRange
        }]
    });
});

////////////	
	
var districtFilter = document.getElementById("district-filter");
districtFilter.innerHTML = '<option value="">None</option>';

var premiseTypeFilter = document.getElementById("premise-type-filter");
premiseTypeFilter.innerHTML = '<option value="">None</option>';

stateFilter.addEventListener("change", function() {
  var selectedState = stateFilter.value;
  
  var districtFilter = document.getElementById("district-filter");
  districtFilter.innerHTML = '<option value="">None</option>';
  
  if (selectedState === "Kedah") {
    var districts = ["None","Padang Besar", "Kangar", "Sungai Besar"];
  } else if (selectedState === "Kuala Lumpur") {
    var districts = ["None","Bangi", "Kajang"];
  } else {
    var districts = [];
  }
  
  districts.forEach(function(district) {
    var option = document.createElement("option");
    option.text = district;
    districtFilter.add(option);
  });
});

districtFilter.addEventListener("change", function() {
  var selectedDistrict = districtFilter.value;
  
  var premiseTypeFilter = document.getElementById("premise-type-filter");
  premiseTypeFilter.innerHTML = '<option value="">None</option>';
  
  if (selectedDistrict === "Padang Besar" || selectedDistrict === "Kangar" || selectedDistrict === "Sungai Besar") {
    var premiseTypes = ["None","Gerai", "Pasar", "Pasar Basah"];
  } else if (selectedDistrict === "Bangi" || selectedDistrict === "Kajang") {
    var premiseTypes = ["None","Pasar", "Pasar Basah"];
  } else {
    var premiseTypes = [];
  }
  
  premiseTypes.forEach(function(premiseType) {
    var option = document.createElement("option");
    option.text = premiseType;
    premiseTypeFilter.add(option);
  });
});
