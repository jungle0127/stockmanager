package com.veritas;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.TimeUnit;

import jdk.internal.org.xml.sax.InputSource;
import sun.misc.ThreadGroupUtils;

public class Stock {

	public static void main(String[] args) {
		while(true){
			requestData();
			try {
				TimeUnit.SECONDS.sleep(1);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	public static void requestData(){
		BufferedReader reader = null;
		String result = null;
		StringBuffer sb = new StringBuffer();
		URL url;
		try {
			url = new URL("http://hq.sinajs.cn/list=sh601008");
			HttpURLConnection con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("GET");
			con.connect();
			InputStream in = con.getInputStream();
			reader = new BufferedReader(new InputStreamReader(in, "UTF-8"));
			String strRead = null;
			while((strRead = reader.readLine()) != null){
				sb.append(strRead);
				sb.append("\r\n");
			}
			reader.close();
			con.disconnect();			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		result = sb.toString();
		System.out.println(result);
		
	}
}
