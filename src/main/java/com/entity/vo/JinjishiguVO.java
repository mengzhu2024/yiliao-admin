package com.entity.vo;

import com.entity.JinjishiguEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;


/**
 * 紧急事故
 * 手机端接口返回实体辅助类
 * （主要作用去除一些不必要的字段）
 */
public class JinjishiguVO  implements Serializable {
	private static final long serialVersionUID = 1L;


	/**
	 * 内容
	 */

	private String neirong;

	/**
	 * 发生时间
	 */

	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date fashengshijian;

	/**
	 * 用户名
	 */

	private String yonghuming;

	/**
	 * 姓名
	 */

	private String xingming;

	/**
	 * 是否审核
	 */

	private String sfsh;

	/**
	 * 审核回复
	 */

	private String shhf;


	/**
	 * 设置：内容
	 */

	public void setNeirong(String neirong) {
		this.neirong = neirong;
	}

	/**
	 * 获取：内容
	 */
	public String getNeirong() {
		return neirong;
	}


	/**
	 * 设置：发生时间
	 */

	public void setFashengshijian(Date fashengshijian) {
		this.fashengshijian = fashengshijian;
	}

	/**
	 * 获取：发生时间
	 */
	public Date getFashengshijian() {
		return fashengshijian;
	}


	/**
	 * 设置：用户名
	 */

	public void setYonghuming(String yonghuming) {
		this.yonghuming = yonghuming;
	}

	/**
	 * 获取：用户名
	 */
	public String getYonghuming() {
		return yonghuming;
	}


	/**
	 * 设置：姓名
	 */

	public void setXingming(String xingming) {
		this.xingming = xingming;
	}

	/**
	 * 获取：姓名
	 */
	public String getXingming() {
		return xingming;
	}


	/**
	 * 设置：是否审核
	 */

	public void setSfsh(String sfsh) {
		this.sfsh = sfsh;
	}

	/**
	 * 获取：是否审核
	 */
	public String getSfsh() {
		return sfsh;
	}


	/**
	 * 设置：审核回复
	 */

	public void setShhf(String shhf) {
		this.shhf = shhf;
	}

	/**
	 * 获取：审核回复
	 */
	public String getShhf() {
		return shhf;
	}

}
