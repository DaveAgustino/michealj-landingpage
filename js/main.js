(function () {
  window.onload = function () {
    window.setTimeout(fadeout, 0);
  };
  function fadeout() {
    document.querySelector(".page-loader").style.opacity = "0";
    document.querySelector(".page-loader").style.display = "none";
  }
  window.onscroll = function () {
    var header_navbar = document.querySelector(".navbar-area");
    var sticky = header_navbar.offsetTop;
    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");
    } else {
      header_navbar.classList.remove("sticky");
    }
  };

  var pageLink = document.querySelectorAll(".page-scroll");
	pageLink.forEach((elem) => {
		elem.addEventListener("click", (e) => {
			e.preventDefault();
			document
				.querySelector(elem.getAttribute("href"))
				.scrollIntoView({ behavior: "smooth", offsetTop: 1 - 60 });
		});
	});
	function onScroll(event) {
		var sections = document.querySelectorAll(".page-scroll");
		var scrollPos =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;
		for (var i = 0; i < sections.length; i++) {
			var currLink = sections[i];
			var val = currLink.getAttribute("href");
			var refElement = document.querySelector(val);
			var scrollTopMinus = scrollPos + 73;
			if (
				refElement.offsetTop <= scrollTopMinus &&
				refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
			) {
				document
					.querySelector(".page-scroll")
					.classList.remove("active");
				currLink.classList.add("active");
			} else {
				currLink.classList.remove("active");
			}
		}
	}
	window.document.addEventListener("scroll", onScroll);
	let navbarToggler = document.querySelector(".navbar-toggler");
	var navbarCollapse = document.querySelector(".navbar-collapse");
	document.querySelectorAll(".page-scroll").forEach((e) =>
		e.addEventListener("click", () => {
			navbarToggler.classList.remove("active");
			navbarCollapse.classList.remove("show");
		})
	);
	navbarToggler.addEventListener("click", function () {
		navbarToggler.classList.toggle("active");
	});




  //Animation on Scroll initializing
  AOS.init();

  
  
  window.addEventListener('load', function() {
	setTimeout(function() {
	  document.getElementById('preloader').classList.add('hidden');
	}, 2050); // SECOND ADJUST
  });


})();




// Load the audio file
createjs.Sound.registerSound("/music/Billie Jean.mp3", "backgroundMusic"); // Ensure this path is correct

// Play the audio when the page loads
window.onload = function() {
    createjs.Sound.play("backgroundMusic", { loop: -1, volume: 0.2 }); // Play music in a loop
};