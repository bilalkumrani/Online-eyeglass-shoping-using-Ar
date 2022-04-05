import React from "react";
import { Form } from "react-bootstrap";
import SearchBox from "./../common/searchBox";
import OrderReports from "./orderReports";
import axios from "axios";

export class ComponentToPrint extends React.Component {
  state = { searchQuery: "", currentOption: "orderId", data: [] };

  async componentDidMount() {
    const { data } = await axios.get("http://localhost:8000/orders");
    this.setState({
      searchQuery: this.state.searchQuery,
      currentOption: this.state.currentOption,
      data: data,
    });
  }
  render() {
    const handleSearch = (search) => {
      this.setState({
        searchQuery: search,
        currentOption: this.state.currentOption,
        data: this.state.data,
      });
    };
    const handleOption = (option) => {
      this.setState({
        searchQuery: this.state.searchQuery,
        currentOption: option,
        data: this.state.data,
      });
    };

    const searchOptions = [
      { value: "orderId", label: "Order ID" },
      { value: "customerId", label: "Customer ID" },
      { value: "status", label: "Status" },
      { value: "totalAmount", label: "Total Price" },
    ];

    const getOrders = () => {
      let filtered = [];
      if (this.state.searchQuery) {
        filtered = this.state.data.filter((m) =>
          m[this.state.currentOption]
            .toString()
            .toLowerCase()
            .startsWith(this.state.searchQuery.toLowerCase())
        );
      } else {
        filtered = this.state.data;
      }

      return filtered;
    };

    const orders = getOrders();

    return (
      <React.Fragment>
        {this.state.data && (
          <div className="p-2">
            <div className="shadow p-4">
              <div className="row mb-3">
                <div className="col-sm-12 col-md-3">
                  <Form.Control
                    as="select"
                    custom
                    onChange={(e) => {
                      handleOption(e.target.value + "");
                    }}
                    className="form-control "
                  >
                    {searchOptions.map((item) => (
                      <option value={item.value}>{item.label}</option>
                    ))}
                  </Form.Control>
                </div>
                <div className="col-sm-8 col-md-6">
                  <SearchBox
                    value={this.state.searchQuery}
                    onChange={handleSearch}
                  />
                </div>
                <div className="col ">
                  <button
                    className="btn btn-primary px-3 w-100"
                    onClick={this.props.onPrint}
                  >
                    Print Report
                  </button>
                </div>
              </div>

              <OrderReports data={orders} />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
