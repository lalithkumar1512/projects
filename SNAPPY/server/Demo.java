class Demo extends Thread{
    int a=0;
    public void run(){
        for(int i=0;i<10;i++){
            a++;
            System.out.println(a);  
        }        
    }  
    public static void main(String args[]){  
        Demo t1=new Demo();  
        Demo t2=new Demo();  
        t1.start();
        t2.start();  
    }  
}  
                                                                                                                                                                                                                                                                                                