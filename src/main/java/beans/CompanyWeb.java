package beans;

import java.io.Serializable;
import java.util.ArrayList;

import java.util.Collection;
import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

import core.javaBeans.Company;

@XmlRootElement
public class CompanyWeb implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private long id;
	private String compName;
	private String password;
	private String email;
	private Collection<CouponWeb> coupons;

	public CompanyWeb() {

	}

	public CompanyWeb(Company c) {
		this.id = c.getId();
		this.compName = c.getCompName();
		this.password = c.getPassword();
		this.email = c.getEmail();
	}

	public Company changeToCompany() {
		Company company = new Company();
		company.setId(this.id);
		company.setCompName(this.compName);
		company.setPassword(this.password);
		company.setEmail(this.email);

		return company;
	}

	public Collection<CompanyWeb> changeToCompaniesWeb(Collection<Company> companies) {
		List<CompanyWeb> companiesList = new ArrayList<>();
		for (Company company : companies) {
			CompanyWeb comp = new CompanyWeb(company);
			companiesList.add(comp);
		}
		return companiesList;
	}

	public Collection<Company> changeToCompanies(Collection<CompanyWeb> companies) {
		List<Company> companiesList = new ArrayList<>();
		for (CompanyWeb company : companies) {
			Company comp = new Company();
			comp.setId(company.getId());
			comp.setCompName(company.getCompName());
			comp.setEmail(company.getEmail());
			comp.setPassword(company.getPassword());
			companiesList.add(comp);
		}
		return companiesList;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCompName() {
		return compName;
	}

	public void setCompName(String compName) {
		this.compName = compName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Collection<CouponWeb> getCoupons() {
		return coupons;
	}

	public void setCoupons(Collection<CouponWeb> coupons) {
		this.coupons = coupons;
	}

	@Override
	public String toString() {
		return "Company [id=" + id + ", company Name=" + compName + ", password=" + password + ", email=" + email
				+ ", coupons=" + coupons + "]";
	}

}
