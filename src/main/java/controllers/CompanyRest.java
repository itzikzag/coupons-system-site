package controllers;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
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
import core.Exceptions.UniqueNameException;
import core.facades.CompanyFacade;
import core.javaBeans.Coupon;
import core.javaBeans.CouponType;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/company")
public class CompanyRest {
	public CompanyFacade companyFacade(HttpServletRequest request) {
		CompanyFacade companyF = null;
		companyF = (CompanyFacade) request.getSession().getAttribute("facade");
		return companyF;
	}

	@RequestMapping(value = "/createcoupon", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void createCoupon(@RequestBody CouponWeb c,HttpServletRequest request) throws CouponSystemException, UniqueNameException {
		CompanyFacade companyFacade = companyFacade(request);
		if (companyFacade != null) {
			Coupon coupon = c.changeToCoupon();
			companyFacade.createCoupon(coupon);
		}

	}

	@RequestMapping(value = "/updatecoupon", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void updateCoupon(@RequestBody CouponWeb c,HttpServletRequest request) throws CouponSystemException {
		CompanyFacade companyFacade = companyFacade(request);
		if (companyFacade != null) {
			Coupon coupon = c.changeToCoupon();
			companyFacade.updateCoupon(coupon);
		}

	}

	@RequestMapping(value = "/deletecoupon", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void deleteCoupon(@RequestBody CouponWeb c,HttpServletRequest request) throws CouponSystemException {
		CompanyFacade companyFacade = companyFacade(request);
		if (companyFacade != null) {
			Coupon coupon = c.changeToCoupon();
			companyFacade.removeCoupon(coupon);
		}
	}

	@RequestMapping(value = "/getcoupon/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)

	public CouponWeb getCoupon(@PathVariable("id") long id,HttpServletRequest request) throws CouponSystemException {
		CompanyFacade companyFacade = companyFacade(request);
		if (companyFacade != null) {
			Coupon coupon = companyFacade.readCoupon(id);
			CouponWeb couponService = new CouponWeb(coupon);
			return couponService;
		}
		return null;
	}

	@RequestMapping(value = "/getallcoupon", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<CouponWeb> getAllCoupon(HttpServletRequest request) throws CouponSystemException {
		CompanyFacade companyFacade = companyFacade(request);
		if (companyFacade != null) {
			CouponWeb couponService = new CouponWeb();
			Collection<Coupon> coupons = new ArrayList<>();
			coupons = companyFacade.getAllCoupon();
			Collection<CouponWeb> coupons1 = new ArrayList<>();
			coupons1 = couponService.changeToCouponsWeb(coupons);
			return coupons1;
		}
		return null;
	}

	@RequestMapping(value = "/getcouponsbytype/{type}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<CouponWeb> getCouponsByType(@PathVariable("type") CouponType c,HttpServletRequest request) throws CouponSystemException {
		CompanyFacade companyFacade = companyFacade(request);
		if (companyFacade != null) {

			CouponWeb couponService = new CouponWeb();
			Collection<Coupon> coupons = new ArrayList<>();
			coupons = companyFacade.getCouponsByType(c);
			Collection<CouponWeb> coupons2 = new ArrayList<>();
			coupons2 = couponService.changeToCouponsWeb(coupons);
			return coupons2;
		}
		return null;
	}

	@RequestMapping(value = "/getcouponsbyprice/{price}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<CouponWeb> getCouponsByPrice(@PathVariable("price") double price,HttpServletRequest request)
			throws CouponSystemException {
		CompanyFacade companyFacade = companyFacade(request);
		if (companyFacade != null) {
			CouponWeb couponService = new CouponWeb();
			Collection<Coupon> coupons = new ArrayList<>();
			coupons = companyFacade.getCouponsByPrice(price);
			Collection<CouponWeb> coupons2 = new ArrayList<>();
			coupons2 = couponService.changeToCouponsWeb(coupons);
			return coupons2;
		}
		return null;

	}

	@RequestMapping(value = "/getcouponsbydate/{date}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<CouponWeb> getCouponsByDate(@PathVariable("date") String date,HttpServletRequest request)
			throws CouponSystemException, ParseException {
		SimpleDateFormat newFormat = new SimpleDateFormat("yyyy-MM-dd");
		Date newDate = newFormat.parse(date);
		CompanyFacade companyFacade = companyFacade(request);
		if (companyFacade != null) {
			CouponWeb couponService = new CouponWeb();
			Collection<Coupon> coupons = new ArrayList<>();
			coupons = companyFacade.getCouponsByDate(newDate);
			Collection<CouponWeb> coupons2 = new ArrayList<>();
			coupons2 = couponService.changeToCouponsWeb(coupons);
			return coupons2;
		}
		return null;
	}
	
	@RequestMapping(value = "companylogout", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public void logout(HttpServletRequest request) throws CouponSystemException{
		CompanyFacade companyFacade= companyFacade(request);
		if (companyFacade != null) {
			request.getSession().removeAttribute("facade");
			request.getSession().removeAttribute("authenticated");
			request.getSession().removeAttribute("username");
		}
	}
	
	@RequestMapping(value = "getcompanyusername", method = RequestMethod.GET, produces = MediaType.TEXT_PLAIN_VALUE)

//	@ResponseBody
	public String getCompanyName(HttpServletRequest request) throws CouponSystemException {
		CompanyFacade facade = companyFacade(request);
		if (facade != null) {
			String compName = (String) request.getSession().getAttribute("username");
			return compName;
		}
		return null;
	}

}