
<script>
import { useMailStore } from "@/stores/mails.js";
import { reactive } from "vue";

export default {
  setup() {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    const mailStore = useMailStore();
    const indexMsg = mailStore.index;
    const news = reactive(mailStore.newItem);

    function updateItem() {
      mailStore.updateNew("smsm", 1);
    }

    return { monthNames, news, updateItem, indexMsg };
  },
  props: ["msgs"],
  data() {
    return {
      msgsType: "all",
      paginationLimit: 10,
      currentPage: 1,
      pagesCount: Math.ceil(this.msgs.length / this.paginationLimit)
    };
  },
  computed: {
    msgsTypes() {
      return this.msgsType;
    },
    currentMsgs() {
      if (this.msgsTypes == "work") {
        return this.msgs.filter(item => item.type == "work");
      } else if (this.msgsTypes == "family") {
        return this.msgs.filter(item => item.type == "family");
      } else if (this.msgsTypes == "social") {
        return this.msgs.filter(item => item.type == "social");
      } else if (this.msgsTypes == "promotions") {
        return this.msgs.filter(item => item.type == "promotions");
      } else if (this.msgsTypes == "primary") {
        return this.msgs.filter(item => item.type == "primary");
      } else if (this.msgsTypes == "forums") {
        return this.msgs.filter(item => item.type == "forums");
      } else {
        return this.msgs;
      }
    },
    current() {
      const currentRange = this.currentPage * this.paginationLimit;
      // const prevRange = this.currentPage == 1 ? currentRange - this.paginationLimit : (currentRange - this.paginationLimit) - 1
      const prevRange = (this.currentPage - 1) * this.paginationLimit;
      console.log(prevRange, currentRange);
      return this.currentMsgs.slice(prevRange, currentRange);
    },
    pageCountComputed() {
      let pageCount = this.currentMsgs.length / this.paginationLimit;
      const StringF = String(pageCount);
      if (StringF.includes(".")) {
        return +pageCount.toFixed();
      }
      return pageCount;
    }
  },
  methods: {
    refresh() {
      this.$forceUpdate();
    },
    increase() {
      if (this.currentPage >= this.pagesCount) {
        return;
      } else {
        this.currentPage = this.currentPage + 1;
      }
    },
    decrease() {
      if (this.currentPage <= 1) {
        return;
      } else {
        this.currentPage = this.currentPage - 1;
      }
    }
  }
  // mounted() {
  // 	const paginationNumbers = document.getElementById("pagination-numbers");
  // 	const paginatedList = document.getElementById("paginated-list");
  // 	const listItems = paginatedList.querySelectorAll("li");

  // 	const paginationLimit = 10;
  // 	const pageCount = Math.ceil(listItems.length / paginationLimit);
  // 	let currentPage = 1;

  // 	const appendPageNumber = (index) => {
  // 		const pageNumber = document.createElement("button");
  // 		pageNumber.className = "pagination-number";
  // 		pageNumber.innerHTML = index;
  // 		pageNumber.setAttribute("page-index", index);
  // 		pageNumber.setAttribute("aria-label", "Page " + index);

  // 		paginationNumbers.appendChild(pageNumber);
  // 	};

  // 	const getPaginationNumbers = () => {
  // 		for (let i = 1; i <= pageCount; i++) {
  // 			appendPageNumber(i);
  // 		}
  // 	};

  // 	const handleActivePageNumber = () => {
  // 		document.querySelectorAll(".pagination-number").forEach((button) => {
  // 			button.classList.remove("active");
  // 			const pageIndex = Number(button.getAttribute("page-index"));
  // 			if (pageIndex == currentPage) {
  // 				button.classList.add("active");
  // 			}
  // 		});
  // 	};

  // 	const setCurrentPage = (pageNum) => {
  // 		currentPage = pageNum;
  // 		handleActivePageNumber();

  // 		const prevRange = (pageNum - 1) * paginationLimit;
  // 		const currRange = pageNum * paginationLimit;

  // 		listItems.forEach((item, index) => {
  // 			item.classList.add("hidden");
  // 			if (index >= prevRange && index < currRange) {
  // 				item.classList.remove("hidden");
  // 			}
  // 		});
  // 	};

  // 	window.addEventListener("load", () => {
  // 		getPaginationNumbers();
  // 		setCurrentPage(1);

  // 		document.querySelectorAll(".pagination-number").forEach((button) => {
  // 			const pageIndex = Number(button.getAttribute("page-index"));

  // 			if (pageIndex) {
  // 				button.addEventListener("click", () => {
  // 					setCurrentPage(pageIndex);
  // 				});
  // 			}
  // 		});
  // 	}
};
</script>


<template>
  <div class="col-md-8 mailbox-content tab-content tab-content-in">
    <div class="tab-pane active text-style" id="tab1">
      <div class="mailbox-border">
        <!-- <div v-for="item of current"> {{ item.id + " " + item.sender }} </div> -->
        <!-- {{ pageCountComputed }} -->
        <!-- <div v-for="item of news"> {{ item.id + " " + item.name + " " + item.age + " " + item.state }} </div>
        <button class="btn btn-primary" @click="updateItem()"> welcome</button>-->
        <div class="mail-toolbar clearfix">
          <div class="float-left">
            <div
              @click="msgsType = 'all'; currentPage = 1 "
              class="btn btn_1 btn-default mrg5R border"
            >
              <i class="fa fa-refresh"></i>
            </div>
            <div class="dropdown dropdown-inbox">
              <a
                href="#"
                title
                class="border btn btn-default"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa fa-cog icon_8"></i>
                <i class="fa fa-chevron-down icon_8"></i>
                <div class="ripple-wrapper"></div>
              </a>
              <ul class="dropdown-menu float-right">
                <li>
                  <a href="#" title>
                    <i class="fa fa-pencil-square-o icon_9"></i>
                    Edit
                  </a>
                </li>
                <li>
                  <a href="#" title>
                    <i class="fa fa-calendar icon_9"></i>
                    Schedule
                  </a>
                </li>
                <li>
                  <a href="#" title>
                    <i class="fa fa-download icon_9"></i>
                    Download
                  </a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#" class="font-red" title>
                    <i class="fa fa-times" icon_9></i>
                    Delete
                  </a>
                </li>
              </ul>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="float-right custom">
            <span
              class="text-muted m-r-sm"
            >Showing {{ this.currentPage }} of {{ this.pageCountComputed }}</span>
            <div class="btn-group m-r-sm mail-hidden-options" style="display: inline-block;">
              <!-- <div class="btn-group">
								<a class="btn btn-default border dropdown-toggle" data-toggle="dropdown"
									aria-expanded="false"><i class="fa fa-folder"></i> <span class="caret"></span></a>
								<ul class="dropdown-menu dropdown-menu-right" role="menu">
									<li>Socail</li>
									<li>forums</li>
									<li>updates</li>
									<li class="divider"></li>
									<li>spams</li>
									<li>trush</li>
									<li class="divider"></li>
									<li>new</li>
								</ul>
              </div>-->
              <div class="btn-group">
                <a
                  class="border btn btn-default dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa fa-tags"></i>
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu dropdown-menu-right" role="menu">
                  <li @click="this.msgsType = 'work'">work</li>
                  <li @click="this.msgsType = 'family'">family</li>
                  <li>socail</li>
                  <li class="divider"></li>
                  <li @click="this.msgsType = 'primary'">Primary</li>
                  <li @click="this.msgsType = 'promotions'">Promotions</li>
                  <li @click="this.msgsType = 'forums'">Forums</li>
                </ul>
              </div>
            </div>
            <div class="btn-group">
              <a @click="decrease()" class="btn btn-default border">
                <i class="fa fa-angle-left"></i>
              </a>
              <a @click="increase()" class="btn btn-default border">
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="body">
          <div class="table-responsive">
            <table class="table tab-border">
              <tbody>
                <tr v-for="(item, index) of current" :key="index" class="unread checked">
                  <td class="hidden-xs">
                    <input type="checkbox" class="checkbox" />
                  </td>
                  <td class="hidden-xs">
                    <i class="fa fa-star" :class="item.star ? 'icon-state-warning' : ''"></i>
                  </td>
                  <td class="hidden-xs">{{ item.sender }}</td>
                  <td>{{ item.content }}</td>
                  <td></td>
                  <td>10 march</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-pane text-style" id="tab2">
      <div class="mailbox-border">
        <div class="mail-toolbar clearfix">
          <div class="float-left">
            <div class="btn btn_1 btn-default mrg5R">
              <i @click="refresh" class="fa fa-refresh"></i>
            </div>
            <div class="dropdown dropdown-inbox">
              <a
                href="#"
                title
                class="btn btn-default"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa fa-cog icon_8"></i>
                <i class="fa fa-chevron-down icon_8"></i>
                <div class="ripple-wrapper"></div>
              </a>
              <ul class="dropdown-menu float-right">
                <li>
                  <a href="#" title>
                    <i class="fa fa-pencil-square-o icon_9"></i>
                    Edit
                  </a>
                </li>
                <li>
                  <a href="#" title>
                    <i class="fa fa-calendar icon_9"></i>
                    Schedule
                  </a>
                </li>
                <li>
                  <a href="#" title>
                    <i class="fa fa-download icon_9"></i>
                    Download
                  </a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#" class="font-red" title>
                    <i class="fa fa-times" icon_9></i>
                    Delete
                  </a>
                </li>
              </ul>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="float-right">
            <span class="text-muted m-r-sm">Showing 20 of 346</span>
            <div class="btn-group m-r-sm mail-hidden-options" style="display: inline-block;">
              <div class="btn-group">
                <a
                  class="btn btn-default dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa fa-folder"></i>
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu dropdown-menu-right" role="menu">
                  <li>
                    <a href="#">Social</a>
                  </li>
                  <li>
                    <a href="#">Forums</a>
                  </li>
                  <li>
                    <a href="#">Updates</a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">Spam</a>
                  </li>
                  <li>
                    <a href="#">Trash</a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">New</a>
                  </li>
                </ul>
              </div>
              <div class="btn-group">
                <a
                  class="btn btn-default dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa fa-tags"></i>
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu dropdown-menu-right" role="menu">
                  <li>
                    <a href="#">Work</a>
                  </li>
                  <li>
                    <a href="#">Family</a>
                  </li>
                  <li>
                    <a href="#">Social</a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">Primary</a>
                  </li>
                  <li>
                    <a href="#">Promotions</a>
                  </li>
                  <li>
                    <a href="#">Forums</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="btn-group">
              <a class="btn btn-default">
                <i class="fa fa-angle-left"></i>
              </a>
              <a class="btn btn-default">
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        <table class="table tab-border">
          <tbody>
            <tr class="unread checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star icon-state-warning"></i>
              </td>
              <td class="hidden-xs">Dropbox</td>
              <td>Consectetuer adipiscing elit</td>
              <td></td>
              <td>02 march</td>
            </tr>
            <tr class="unread checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star icon-state-warning"></i>
              </td>
              <td class="hidden-xs">Adobe</td>
              <td>Nemo enim ipsam voluptatem</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>8 march</td>
            </tr>
            <tr class="unread checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star icon-state-warning"></i>
              </td>
              <td class="hidden-xs">Apple</td>
              <td>Hai Neha.How are You</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>4 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star"></i>
              </td>
              <td class="hidden-xs">Microsoft</td>
              <td>Nemo enim ipsam voluptatem</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>1 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star"></i>
              </td>
              <td class="hidden-xs">Microsoft</td>
              <td>Lorem ipsum dolor sit amet</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>15 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star icon-state-warning"></i>
              </td>
              <td class="hidden-xs">Dropbox</td>
              <td>Nemo enim ipsam voluptatem</td>
              <td></td>
              <td>10 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star"></i>
              </td>
              <td class="hidden-xs">Dropbox</td>
              <td>Lorem ipsum dolor sit amet</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>14 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star"></i>
              </td>
              <td class="hidden-xs">Dropbox</td>
              <td>Nemo enim ipsam voluptatem</td>
              <td></td>
              <td>11 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star"></i>
              </td>
              <td class="hidden-xs">Dropbox</td>
              <td>Lorem ipsum dolor sit amet</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>20 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star"></i>
              </td>
              <td class="hidden-xs">Dropbox</td>
              <td>Nemo enim ipsam voluptatem</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>25 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star"></i>
              </td>
              <td class="hidden-xs">Twitter</td>
              <td>Consectetuer adipiscing elit</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>26 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star"></i>
              </td>
              <td class="hidden-xs">Twitter</td>
              <td>Nemo enim ipsam voluptatem</td>
              <td></td>
              <td>28 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star icon-state-warning"></i>
              </td>
              <td class="hidden-xs">Twitter</td>
              <td>Lorem ipsum dolor sit amet</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>06 march</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="tab-pane text-style" id="tab3">
      <div class="mailbox-border">
        <div class="mail-toolbar clearfix">
          <div class="float-left">
            <div class="btn btn_1 btn-default mrg5R">
              <i class="fa fa-refresh"></i>
            </div>
            <div class="dropdown dropdown-inbox">
              <a
                href="#"
                title
                class="btn btn-default"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa fa-cog icon_8"></i>
                <i class="fa fa-chevron-down icon_8"></i>
                <div class="ripple-wrapper"></div>
              </a>
              <ul class="dropdown-menu float-right">
                <li>
                  <a href="#" title>
                    <i class="fa fa-pencil-square-o icon_9"></i>
                    Edit
                  </a>
                </li>
                <li>
                  <a href="#" title>
                    <i class="fa fa-calendar icon_9"></i>
                    Schedule
                  </a>
                </li>
                <li>
                  <a href="#" title>
                    <i class="fa fa-download icon_9"></i>
                    Download
                  </a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#" class="font-red" title>
                    <i class="fa fa-times" icon_9></i>
                    Delete
                  </a>
                </li>
              </ul>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="float-right">
            <span class="text-muted m-r-sm">Showing 20 of 346</span>
            <div class="btn-group m-r-sm mail-hidden-options" style="display: inline-block;">
              <div class="btn-group">
                <a
                  class="btn btn-default dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa fa-folder"></i>
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu dropdown-menu-right" role="menu">
                  <li>
                    <a href="#">Social</a>
                  </li>
                  <li>
                    <a href="#">Forums</a>
                  </li>
                  <li>
                    <a href="#">Updates</a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">Spam</a>
                  </li>
                  <li>
                    <a href="#">Trash</a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">New</a>
                  </li>
                </ul>
              </div>
              <div class="btn-group">
                <a
                  class="btn btn-default dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa fa-tags"></i>
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu dropdown-menu-right" role="menu">
                  <li>
                    <a href="#">Work</a>
                  </li>
                  <li>
                    <a href="#">Family</a>
                  </li>
                  <li>
                    <a href="#">Social</a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">Primary</a>
                  </li>
                  <li>
                    <a href="#">Promotions</a>
                  </li>
                  <li>
                    <a href="#">Forums</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="btn-group">
              <a class="btn btn-default">
                <i class="fa fa-angle-left"></i>
              </a>
              <a class="btn btn-default">
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        <table class="table tab-border">
          <tbody>
            <tr class="unread checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star icon-state-warning"></i>
              </td>
              <td class="hidden-xs">Dropbox</td>
              <td>Consectetuer adipiscing elit</td>
              <td></td>
              <td>02 march</td>
            </tr>
            <tr class="unread checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star icon-state-warning"></i>
              </td>
              <td class="hidden-xs">Adobe</td>
              <td>Nemo enim ipsam voluptatem</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>8 march</td>
            </tr>
            <tr class="unread checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star icon-state-warning"></i>
              </td>
              <td class="hidden-xs">Apple</td>
              <td>Hai Neha.How are You</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>4 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star"></i>
              </td>
              <td class="hidden-xs">Microsoft</td>
              <td>Nemo enim ipsam voluptatem</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>1 march</td>
            </tr>
            <tr class="unread checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star icon-state-warning"></i>
              </td>
              <td class="hidden-xs">Google</td>
              <td>Lorem Ipsum is simply</td>
              <td></td>
              <td>12 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star icon-state-warning"></i>
              </td>
              <td class="hidden-xs">Microsoft</td>
              <td>Consectetuer adipiscing elit</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>16 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star icon-state-warning"></i>
              </td>
              <td class="hidden-xs">Dropbox</td>
              <td>Nemo enim ipsam voluptatem</td>
              <td></td>
              <td>10 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star icon-state-warning"></i>
              </td>
              <td class="hidden-xs">Twitter</td>
              <td>Lorem ipsum dolor sit amet</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>06 march</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="tab-pane text-style" id="tab4">
      <div class="mailbox-border">
        <div class="mail-toolbar clearfix">
          <div class="float-left">
            <div class="btn btn_1 btn-default mrg5R border">
              <i class="fa fa-refresh"></i>
            </div>
            <div class="dropdown dropdown-inbox">
              <a
                href="#"
                title
                class="btn btn-default"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa fa-cog icon_8"></i>
                <i class="fa fa-chevron-down icon_8"></i>
                <div class="ripple-wrapper"></div>
              </a>
              <ul class="dropdown-menu float-right">
                <li>
                  <a href="#" title>
                    <i class="fa fa-pencil-square-o icon_9"></i>
                    Edit
                  </a>
                </li>
                <li>
                  <a href="#" title>
                    <i class="fa fa-calendar icon_9"></i>
                    Schedule
                  </a>
                </li>
                <li>
                  <a href="#" title>
                    <i class="fa fa-download icon_9"></i>
                    Download
                  </a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#" class="font-red" title>
                    <i class="fa fa-times" icon_9></i>
                    Delete
                  </a>
                </li>
              </ul>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="float-right">
            <span class="text-muted m-r-sm">Showing 20 of 346</span>
            <div class="btn-group m-r-sm mail-hidden-options" style="display: inline-block;">
              <div class="btn-group">
                <a
                  class="btn btn-default dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa fa-folder"></i>
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu dropdown-menu-right" role="menu">
                  <li>
                    <a href="#">Social</a>
                  </li>
                  <li>
                    <a href="#">Forums</a>
                  </li>
                  <li>
                    <a href="#">Updates</a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">Spam</a>
                  </li>
                  <li>
                    <a href="#">Trash</a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">New</a>
                  </li>
                </ul>
              </div>
              <div class="btn-group">
                <a
                  class="btn btn-default dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa fa-tags"></i>
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu dropdown-menu-right" role="menu">
                  <li>
                    <a href="#">Work</a>
                  </li>
                  <li>
                    <a href="#">Family</a>
                  </li>
                  <li>
                    <a href="#">Social</a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">Primary</a>
                  </li>
                  <li>
                    <a href="#">Promotions</a>
                  </li>
                  <li>
                    <a href="#">Forums</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="btn-group">
              <a class="btn btn-default">
                <i class="fa fa-angle-left"></i>
              </a>
              <a class="btn btn-default">
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        <table class="table tab-border">
          <tbody>
            <tr class="unread checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star icon-state-warning"></i>
              </td>
              <td class="hidden-xs">Adobe</td>
              <td>Nemo enim ipsam voluptatem</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>8 march</td>
            </tr>
            <tr class="unread checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star icon-state-warning"></i>
              </td>
              <td class="hidden-xs">Apple</td>
              <td>Hai Neha.How are You</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>4 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star"></i>
              </td>
              <td class="hidden-xs">Microsoft</td>
              <td>Nemo enim ipsam voluptatem</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>1 march</td>
            </tr>
            <tr class="unread checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star icon-state-warning"></i>
              </td>
              <td class="hidden-xs">Google</td>
              <td>Lorem Ipsum is simply</td>
              <td></td>
              <td>12 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star icon-state-warning"></i>
              </td>
              <td class="hidden-xs">Microsoft</td>
              <td>Consectetuer adipiscing elit</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>16 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star icon-state-warning"></i>
              </td>
              <td class="hidden-xs">Dropbox</td>
              <td>Nemo enim ipsam voluptatem</td>
              <td></td>
              <td>10 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star icon-state-warning"></i>
              </td>
              <td class="hidden-xs">Twitter</td>
              <td>Lorem ipsum dolor sit amet</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>06 march</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="tab-pane text-style" id="tab5">
      <div class="mailbox-border">
        <div class="mail-toolbar clearfix">
          <div class="float-left">
            <div class="btn btn_1 btn-default mrg5R">
              <i class="fa fa-refresh"></i>
            </div>
            <div class="dropdown dropdown-inbox">
              <a
                href="#"
                title
                class="btn btn-default"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa fa-cog icon_8"></i>
                <i class="fa fa-chevron-down icon_8"></i>
                <div class="ripple-wrapper"></div>
              </a>
              <ul class="dropdown-menu float-right">
                <li>
                  <a href="#" title>
                    <i class="fa fa-pencil-square-o icon_9"></i>
                    Edit
                  </a>
                </li>
                <li>
                  <a href="#" title>
                    <i class="fa fa-calendar icon_9"></i>
                    Schedule
                  </a>
                </li>
                <li>
                  <a href="#" title>
                    <i class="fa fa-download icon_9"></i>
                    Download
                  </a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#" class="font-red" title>
                    <i class="fa fa-times" icon_9></i>
                    Delete
                  </a>
                </li>
              </ul>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="float-right">
            <span class="text-muted m-r-sm">Showing 20 of 346</span>
            <div class="btn-group m-r-sm mail-hidden-options" style="display: inline-block;">
              <div class="btn-group">
                <a
                  class="btn btn-default dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa fa-folder"></i>
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu dropdown-menu-right" role="menu">
                  <li>
                    <a href="#">Social</a>
                  </li>
                  <li>
                    <a href="#">Forums</a>
                  </li>
                  <li>
                    <a href="#">Updates</a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">Spam</a>
                  </li>
                  <li>
                    <a href="#">Trash</a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">New</a>
                  </li>
                </ul>
              </div>
              <div class="btn-group">
                <a
                  class="btn btn-default dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa fa-tags"></i>
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu dropdown-menu-right" role="menu">
                  <li>
                    <a href="#">Work</a>
                  </li>
                  <li>
                    <a href="#">Family</a>
                  </li>
                  <li>
                    <a href="#">Social</a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">Primary</a>
                  </li>
                  <li>
                    <a href="#">Promotions</a>
                  </li>
                  <li>
                    <a href="#">Forums</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="btn-group">
              <a class="btn btn-default">
                <i class="fa fa-angle-left"></i>
              </a>
              <a class="btn btn-default">
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        <table class="table tab-border">
          <tbody>
            <tr class="unread checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star icon-state-warning"></i>
              </td>
              <td class="hidden-xs">Apple</td>
              <td>Hai Neha.How are You</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>4 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star"></i>
              </td>
              <td class="hidden-xs">Microsoft</td>
              <td>Nemo enim ipsam voluptatem</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>1 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star"></i>
              </td>
              <td class="hidden-xs">Dropbox</td>
              <td>Lorem ipsum dolor sit amet</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>20 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star"></i>
              </td>
              <td class="hidden-xs">Dropbox</td>
              <td>Nemo enim ipsam voluptatem</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>25 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star"></i>
              </td>
              <td class="hidden-xs">Twitter</td>
              <td>Consectetuer adipiscing elit</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>26 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star"></i>
              </td>
              <td class="hidden-xs">Twitter</td>
              <td>Nemo enim ipsam voluptatem</td>
              <td></td>
              <td>28 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star icon-state-warning"></i>
              </td>
              <td class="hidden-xs">Twitter</td>
              <td>Lorem ipsum dolor sit amet</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>06 march</td>
            </tr>
            <tr class="unread checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star"></i>
              </td>
              <td class="hidden-xs">Twitter</td>
              <td>Nemo enim ipsam voluptatem</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>8 march</td>
            </tr>
            <tr class="unread checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star"></i>
              </td>
              <td class="hidden-xs">Dropbox</td>
              <td>Consectetuer adipiscing elit</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>10 march</td>
            </tr>
            <tr class="read checked">
              <td class="hidden-xs">
                <input type="checkbox" class="checkbox" />
              </td>
              <td class="hidden-xs">
                <i class="fa fa-star"></i>
              </td>
              <td class="hidden-xs">Dropbox</td>
              <td>Nemo enim ipsam voluptatem</td>
              <td>
                <i class="fa fa-paperclip"></i>
              </td>
              <td>16 march</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table {
  input {
    margin: 6px auto;
  }
}

.fa-chevron-down {
  font-size: 11px;
  transform: translate(6px, -2px);
}

ul.dropdown-menu li:not(.devider) {
  padding: 3px 8px;
  text-transform: capitalize;

  &:hover {
    background-color: #f7f7f7;
  }
}

.dropdown-menu {
  padding: 5px 15px;
}

.float-right.custom {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dropdown-menu .divider {
  margin: 0 !important;
  padding: 0 !important;
}
</style>