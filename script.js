const forbancha = document.querySelector(".forbancha");
const forgonggu = document.getElementsByClassName("forgong");
const fornew = document.querySelector(".fornew");
const forpop = document.querySelector(".forpop");
const forcate = document.querySelector(".forcate");
const forhome = document.getElementsByClassName("forhome");

const main = document.querySelector(".main");
const gonggu = document.querySelector(".gonggu");
const bancha = document.querySelector(".bancha");
const nnew = document.querySelector(".new");
const pop = document.querySelector(".pop");
const cate = document.querySelector(".cate");
const cateall = document.querySelector(".cateall");
const detail = document.querySelector(".detail");

forbancha.addEventListener("click", () => {
	main.style.display = "none";
	gonggu.style.display = "none";
	bancha.style.display = "block";
	nnew.style.display = "none";
	pop.style.display = "none";
	cate.style.display = "none";
	cateall.style.display = "none";
	detail.style.display = "none";

	console.log(1);
});
for (let e of forgonggu) {
	e.addEventListener("click", () => {
		main.style.display = "none";
		gonggu.style.display = "block";
		bancha.style.display = "none";
		nnew.style.display = "none";
		pop.style.display = "none";
		cate.style.display = "none";
		cateall.style.display = "none";
		detail.style.display = "none";
		console.log(2);
	});
}

fornew.addEventListener("click", () => {
	main.style.display = "none";
	gonggu.style.display = "none";
	bancha.style.display = "none";
	nnew.style.display = "block";
	pop.style.display = "none";
	cate.style.display = "none";
	cateall.style.display = "none";
	detail.style.display = "none";

	console.log(3);
});
forpop.addEventListener("click", () => {
	main.style.display = "none";
	gonggu.style.display = "none";
	bancha.style.display = "none";
	nnew.style.display = "none";
	pop.style.display = "block";
	cate.style.display = "none";
	cateall.style.display = "none";
	detail.style.display = "none";

	console.log(4);
});
forcate.addEventListener("click", () => {
	main.style.display = "none";
	gonggu.style.display = "none";
	bancha.style.display = "none";
	nnew.style.display = "none";
	pop.style.display = "none";
	cate.style.display = "block";
	cateall.style.display = "none";
	detail.style.display = "none";

	console.log(5);
});
console.log(forhome);
for (let e of forhome) {
	e.addEventListener("click", () => {
		main.style.display = "block";
		gonggu.style.display = "none";
		bancha.style.display = "none";
		nnew.style.display = "none";
		pop.style.display = "none";
		cate.style.display = "none";
		cateall.style.display = "none";
		detail.style.display = "none";
		console.log(6);
	});
}
