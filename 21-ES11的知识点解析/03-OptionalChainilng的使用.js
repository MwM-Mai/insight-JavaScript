// 用于代码进行null/undefined判断更加简洁

const info = {
  name: 'why',
  friend: {
    name: "lilei",
    grilFriend: {
      name: 'hmm'
    }
  }
}


if (info && info.friend && info.friend.grilFriend) {
  console.log(info.friend.grilFriend.name);
}

// ES11 提供了可选链(Optional chainling)
console.log(info.friend?.grilFriend?.name);