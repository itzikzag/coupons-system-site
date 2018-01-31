package controllers;

import java.util.ArrayList;
import java.util.Collection;
import javax.servlet.http.HttpServletRequest;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import beans.CouponWeb;
import core.Exceptions.CouponSystemException;
import core.daoClasses.CouponDBDAO;
import core.facades.CustomerFacade;
import core.javaBeans.Coupon;
import core.javaBeans.CouponType;

@CrossOrigin (origins = "*")		
@RestController
@RequestMapping("/customer")

public class CustomerRest {

	public CustomerFacade customerFacade(HttpServletRequest request){
		CustomerFacade customerF = null;
		 customerF = (CustomerFacade) request.getSession().getAttribute("facade");
	return customerF;
	}
	
	@RequestMapping(value="/buycoupon", method=RequestMethod.POST,
	consumes = MediaType.APPLICATION_JSON_VALUE)
	public void purchaseCoupon(@RequestBody CouponWeb c,HttpServletRequest request) throws CouponSystemException {
		CustomerFacade customerFacade = customerFacade(request);
		if(customerFacade!=null){
			Coupon coupon = c.changeToCoupon();
			customerFacade.purchaseCoupon(coupon);
		}
		
	}
	
	@RequestMapping(value="/getallpurchasedcoupons", method=RequestMethod.GET,
	produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<CouponWeb> getAllPurchasedCoupons(HttpServletRequest request) throws CouponSystemException {
		CustomerFacade customerFacade = customerFacade(request);
		if(customerFacade!=null){
			Collection<Coupon>coupons = customerFacade.getAllPurchasedCoupons();
			CouponWeb couponService = new CouponWeb();
			Collection<CouponWeb>coupons1 = new ArrayList<>();
			coupons1 = couponService.changeToCouponsWeb(coupons);
			System.out.println(coupons1);
			return coupons1;
			
		}
	return null;
	}
	
	@RequestMapping(value="/getallpurchasedcouponstype/{type}", method=RequestMethod.GET,
	produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<CouponWeb> getAllPurchasedCouponsByType(@PathVariable("type")CouponType type,HttpServletRequest request) throws CouponSystemException {
	
		CustomerFacade customerFacade = customerFacade(request);
		if(customerFacade!=null){
			Collection<Coupon>coupons = customerFacade.getAllPurchasedCouponsByType(type);
			CouponWeb couponService = new CouponWeb();
			Collection<CouponWeb>coupons1 = new ArrayList<>();
			coupons1 = couponService.changeToCouponsWeb(coupons);
			return coupons1;
	}
	return null;
	}
	
	@RequestMapping(value="/getallpurchasedcouponsprice/{price}", method=RequestMethod.GET,
	produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<CouponWeb> getAllPurchasedCouponsByPrice(@PathVariable("price")double price,HttpServletRequest request) throws CouponSystemException {
		CustomerFacade customerFacade = customerFacade(request);
		if(customerFacade!=null){
			Collection<Coupon>coupons = customerFacade.getAllPurchasedCouponsByPrice(price);
			CouponWeb couponService = new CouponWeb();
			Collection<CouponWeb>coupons1 = new ArrayList<>();
			coupons1 = couponService.changeToCouponsWeb(coupons);
			return coupons1;
	
	}
		return null;
	}
	
	
	@RequestMapping(value="/getallcouponstobuy", method=RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
			public Collection<CouponWeb> getAllCouponsToBuy(HttpServletRequest request) throws CouponSystemException {
				CustomerFacade customerFacade = customerFacade(request);
				if(customerFacade!=null){
					CouponDBDAO db = new CouponDBDAO();
					Collection<Coupon>coupons = db.getAllCoupon();
					CouponWeb couponService = new CouponWeb();
					Collection<CouponWeb>coupons1 = new ArrayList<>();
					coupons1 = couponService.changeToCouponsWeb(coupons);
					return coupons1;
					
				}
			return null;
			}
	@RequestMapping(value = "customerlogout", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public void logout(HttpServletRequest request) throws CouponSystemException{
		CustomerFacade customerFacade= customerFacade(request);
		if (customerFacade != null) {
			request.getSession().removeAttribute("facade");
			request.getSession().removeAttribute("authenticated");
			request.getSession().removeAttribute("username");
		}
	}
	
	@RequestMapping(value = "getcustomername", method = RequestMethod.GET, produces = MediaType.TEXT_PLAIN_VALUE)

//	@ResponseBody
	public String getCustomeName(HttpServletRequest request) throws CouponSystemException {
		CustomerFacade facade = customerFacade(request);
		if (facade != null) {
			String custName = (String) request.getSession().getAttribute("username");
			return custName;
		}
		return null;
	}
}
