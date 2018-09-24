import React from 'react';


export class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      item: null,
      pager: {} 
    };
  }

  componentDidMount() {
    // set page if items array isn't empty
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage);
    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    // reset page if items array has changed
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage);
    }
  }

  setPage(page) {
    let items = this.props.items;
    let pager = this.state.pager;

    if ((page < 1 || page > pager.totalPages) && pager.totalPages != 0  && pager.totalPages != undefined) {
      return;
    }
    
    if (items != null) {
      
      // get new pager object for specified page
      pager = this.getPager(items.length, page, this.props.pageSize);
      // get new page of items from items array
      let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
      // update state
      this.setState({ pager });
      // call change page function in parent component
      this.props.onChangePage(pageOfItems);

    }



    
  }

  getPager(totalItems, currentPage, pageSize) {
    let startPage, endPage;
    // default to first page
    currentPage = currentPage || 1;

    // default page size is 10
    pageSize = pageSize || 10;

    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);

    startPage = 1;
    endPage = totalPages;

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    const pages = [...Array((endPage + 1) - startPage).fill(null).map((x, i) => i)].map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages
    };
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.setPage(e.target.value);
    }
  }

  render() {
    const pager = this.state.pager;

    if (!pager.pages || pager.pages.length <= 1) {
      // don't display pager if there is only 1 page
      return null;
    }

    return (
      <div className="d-flex align-items-baseline justify-content-between pagination-wrapper">
        <div className="page-status">
          Page {pager.currentPage} of {pager.totalPages}
        </div>
        <ul className="pagination">         
          <li className={pager.currentPage === 1 ? 'disabled page-item' : 'page-item'}>
            <a onClick={() => this.setPage(pager.currentPage - 1)}> <i className="page-link">Prev</i>
            </a>
          </li>

          <li className={pager.currentPage === pager.totalPages ? 'disabled page-item' : 'page-item'}>
            <a onClick={() => this.setPage(pager.currentPage + 1)}><i className="page-link">Next</i></a>
          </li>

        </ul>
      </div>
    );
  }
}

export default Pagination;
