package controllers;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import beans.CompanyWeb;
import beans.CustomerWeb;
import core.Exceptions.CouponSystemException;
import core.Exceptions.UniqueNameException;
import core.facades.AdminFacade;
import core.javaBeans.Company;
import core.javaBeans.Customer;

@CrossOrigin (origins = "*")	
@RestController
@RequestMapping("/admin")
	public class AdminRest {
		public AdminFacade adminFacade(HttpServletRequest request) {

			AdminFacade adminF = null;
			adminF = (AdminFacade) request.getSession().getAttribute("facade");
			

			return adminF;

		}

		@RequestMapping(value="/createcompany", method=RequestMethod.POST,
		consumes = MediaType.APPLICATION_JSON_VALUE)
		public void createCompany(@RequestBody CompanyWeb c,HttpServletRequest request) throws CouponSystemException, UniqueNameException {
			AdminFacade adminFacade = adminFacade(request);
			if (adminFacade != null) {
				Company company = c.changeToCompany();
				adminFacade.createCompany(company);
			}

		}

		@RequestMapping(value="/deletecompany", method=RequestMethod.DELETE,
		consumes = MediaType.APPLICATION_JSON_VALUE)
		public void deleteCompany(@RequestBody CompanyWeb c,HttpServletRequest request) throws CouponSystemException {
			AdminFacade adminFacade = adminFacade(request);
			if (adminFacade != null) {
				Company company = c.changeToCompany();
				adminFacade.removeCompany(company);
			}
		}

		
		@RequestMapping(value="/updatecompany", method=RequestMethod.PUT,
		consumes = MediaType.APPLICATION_JSON_VALUE)
		public void updateCompany(@RequestBody CompanyWeb c,HttpServletRequest request) throws CouponSystemException {
			AdminFacade adminFacade = adminFacade(request);
			if (adminFacade != null) {
				Company company = c.changeToCompany();
				adminFacade.updateCompany(company);
			}
		}



		@RequestMapping(value="/getcompany/{id}", method=RequestMethod.GET,
		produces = MediaType.APPLICATION_JSON_VALUE)
		
		public CompanyWeb readCompany(@PathVariable("id") long id,HttpServletRequest request) throws CouponSystemException {

			AdminFacade adminFacade = adminFacade(request);
			if (adminFacade != null) {
				Company company = adminFacade.readCompany(id);
				CompanyWeb companyService = new CompanyWeb(company);
				return companyService;
			}
			return null;
		}

		
		@RequestMapping(value="/getallcompanies", method=RequestMethod.GET,
		produces = MediaType.APPLICATION_JSON_VALUE)
		public Collection<CompanyWeb> getAllCompanies(HttpServletRequest request) throws CouponSystemException {
			AdminFacade adminFacade = adminFacade(request);
			if (adminFacade != null) {
				CompanyWeb companyService = new CompanyWeb();
				Collection<Company> companies = new ArrayList<>();
				companies = adminFacade.readAllCompanies();
				ArrayList<CompanyWeb> companies1 = (ArrayList<CompanyWeb>) companyService
						.changeToCompaniesWeb(companies);
				return companies1;
			}
			return null;
		}

		@RequestMapping(value="/createcustomer", method=RequestMethod.POST,
		consumes = MediaType.APPLICATION_JSON_VALUE)
		public void createCustomer(@RequestBody CustomerWeb c,HttpServletRequest request) throws CouponSystemException, UniqueNameException {
			AdminFacade adminFacade = adminFacade(request);
			if (adminFacade != null) {
				Customer customer = c.changeToCustomer();
				adminFacade.createCustomer(customer);

			}

		}

		@RequestMapping(value="/deletecustomer", method=RequestMethod.DELETE,
		consumes = MediaType.APPLICATION_JSON_VALUE)
		public void deleteCustomer(@RequestBody CustomerWeb c,HttpServletRequest request) throws CouponSystemException {
			AdminFacade adminFacade = adminFacade(request);
			if (adminFacade != null) {
				Customer customer = c.changeToCustomer();
				adminFacade.removeCustomer(customer);
			}
		}


		@RequestMapping(value="/updatecustomer", method=RequestMethod.PUT,
		consumes = MediaType.APPLICATION_JSON_VALUE)
		public void updateCustomer(@RequestBody CustomerWeb c,HttpServletRequest request) throws CouponSystemException {
			AdminFacade adminFacade = adminFacade(request);
			if (adminFacade != null) {
				Customer customer = c.changeToCustomer();
				adminFacade.updateCustomer(customer);
			}

		}


		@RequestMapping(value="/getcustomer/{id}", method=RequestMethod.GET,
		produces = MediaType.APPLICATION_JSON_VALUE)
		public CustomerWeb getCustomer(@PathVariable("id") long id,HttpServletRequest request) throws CouponSystemException {
			AdminFacade adminFacade = adminFacade(request);
			if (adminFacade != null) {
				Customer customer = adminFacade.readCustomer(id);
				CustomerWeb customerService = new CustomerWeb(customer);
				return customerService;
			}
			return null;

		}


		@RequestMapping(value="/getallcustomer", method=RequestMethod.GET,
		produces = MediaType.APPLICATION_JSON_VALUE)
		public Collection<CustomerWeb> getAllCustomer(HttpServletRequest request) throws CouponSystemException {
			AdminFacade adminFacade = adminFacade(request);
			if (adminFacade != null) {
				CustomerWeb customerService = new CustomerWeb();
				Collection<Customer> companies = new ArrayList<>();
				companies = adminFacade.readAllCustomer();
				List<CustomerWeb> companies2 = (List<CustomerWeb>) customerService.changeToCustomersWeb(companies);
				return companies2;
			}
			return null;
		}

		@RequestMapping(value = "adminlogout", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
		public void logout(HttpServletRequest request) throws CouponSystemException{
				request.getSession().removeAttribute("facade");
				request.getSession().removeAttribute("authenticated");
				
		}
		
	}


