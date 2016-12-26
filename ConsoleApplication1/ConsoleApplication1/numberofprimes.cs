using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class numberofprimes
    {
        static void Main()
        {
            int n1 = int.Parse(Console.ReadLine());
            int n2 = int.Parse(Console.ReadLine());
            for (int n = n1; n <n2; n++)
            {
                int flag = 0;
                for (int j = 2; j <= n / 2; j++)
                {
                    if(n%j==0)
                    {
                        flag=1;break;
                    }
                }
                if (flag == 0 && n > 1)
                    Console.WriteLine(n);
            }
            Console.ReadLine();
        }
    }
}
