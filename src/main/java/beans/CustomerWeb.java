package beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;


import core.javaBeans.Customer;
@XmlRootElement
public class CustomerWeb implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private long id;
	private String custName;
	private String password;
	private Collection<CouponWeb> coupons;

	public CustomerWeb() {
	}

	public CustomerWeb(Customer c){
		this.id = c.getId();
		this.custName = c.getCustName();
		this.password = c.getPassword();
	}
	
	public Customer changeToCustomer(){
		Customer customer = new Customer();
		customer.setId(this.id);
		customer.setCustName(this.custName);
		customer.setPassword(this.password);
		return	customer;
	}
	
	public Collection<CustomerWeb> changeToCustomersWeb(Collection<Customer>customers){
		List<CustomerWeb>customersList = new ArrayList<>();
		for (Customer customer: customers) {
			CustomerWeb c = new CustomerWeb(customer);
customersList.add(c);
		}
		return customersList;
	}
	public Collection<Customer> changeToCustomers(Collection<CustomerWeb>customers){
		List<Customer>customersList = new ArrayList<>();
		for (CustomerWeb customer: customers) {
			Customer c = new Customer();
c.setId(customer.getId());
c.setCustName(c.getCustName());
c.setPassword(c.getPassword());
			customersList.add(c);
		}
		return customersList;
	}
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCustName() {
		return custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Collection<CouponWeb> getCoupons() {
		return coupons;
	}

	public void setCoupons(Collection<CouponWeb> coupons) {
		this.coupons = coupons;
	}

	@Override
	public String toString() {
		return "Customer [id=" + id + ", customerName=" + custName + ", password=" + password + ", coupons=" + coupons
				+ "]";
	}

}
