export class Players {
    constructor(name, imgUrl) {
        this.name = name
        this.imgUrl = imgUrl
        this.score = 0
    }
}

get PlayerCard() {
    return
    `<div class="col-4 d-flex justify-content-center align-items-center m-3">

<img class="img-size"
  src="https://media.istockphoto.com/id/458103295/vector/impressed-woman.jpg?s=612x612&w=0&k=20&c=YuVb1tzwBS7uSjaOH3Z10K4zCf3-XeR_uPjpuKpWQGg="
  alt="">
<p class="fw-bold m-2">Amanda</p>
<button class="btn btn fw-bold bg-danger text-white m-2">-</button>
<p class="fw-bold">0</p>
<button class="btn btn fw-bold bg-success text-white m-2">+</button>


</div>
`
}
