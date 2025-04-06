function calc() {
	var currentYear = 2025;
	var birthYear = prompt("태어난 연도를 입력하세요.", "YYYY");

	if (birthYear && !isNaN(birthYear) && birthYear.length === 4) {
		var age = currentYear - birthYear + 1;
		document.querySelector("#result").innerHTML = "당신의 나이는 " + age + "세입니다.";
		document.querySelector("#result").style.display = "block"; // 결과 보이기
	} else {
		document.querySelector("#result").innerHTML = "유효한 연도를 입력하세요.";
		document.querySelector("#result").style.display = "block"; // 결과 보이기
	}
}