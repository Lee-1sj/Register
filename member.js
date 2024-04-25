// memberId onblur
// memberId onfocus
function memberIdCheck(state) {
  const memberId = document.querySelector("#memberId");
  const memberIdMessage = document.querySelector("#memberIdMessage");

  if (state === "blur") {
    if (memberId.value === "") {
      memberIdMessage.innerHTML = `필수입력항목입니다.`;
      return false;
    } else {
      //패턴검색
      let IdExp = /^[a-z]+[a-z0-9]{5,19}$/g;
      if (!memberId.value.match(IdExp)) {
        memberIdMessage.innerHTML = `잘못된 형식입니다.`;
        return false;
      } else if (memberId.value === "") {
        memberIdMessage.innerHTML = `아이디를 입력해 주세요`;
        return false;
      } else {
        memberIdMessage.innerHTML = `ok.`;
        return true;
      }
    }
  } else if (state === "focus") {
    memberIdMessage.innerHTML = `영문자로 시작하는 영문자 또는 숫자 6~20자`;
    return flase;
  }
}